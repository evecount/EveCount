
'use client';

import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useFirestore } from "@/firebase";
import { addDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { collection } from "firebase/firestore";
import { Send } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const applicationTypes = ["Venture Pitch", "Incubator Application", "Career Inquiry", "Partnership Inquiry"] as const;

const applicationSchema = z.object({
    applicationType: z.enum(applicationTypes, { required_error: "Please select an application type." }),
    submitterName: z.string().min(1, "Please enter your name."),
    contactEmail: z.string().email("Please enter a valid email address."),
    countryCode: z.string({ required_error: "Please select a country code." }).min(1, "Please select a country code."),
    localPhone: z.string().min(5, "Please enter a valid phone number."),
    terms: z.boolean().refine(val => val === true, {
        message: "You must review and agree to the terms and privacy policy to proceed."
    }),
    // Conditional fields
    companyName: z.string().optional(),
    visionPitch: z.string().optional(),
    
    linkedinUrl: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal('')),
    githubUrl: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal('')),
    websiteUrl: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal('')),

    roleInterest: z.string().optional(),
    resumeUrl: z.string().optional(),
    partnershipInterest: z.string().optional(),
    message: z.string().optional(),
}).superRefine((data, ctx) => {
    if (data.applicationType === 'Venture Pitch' && (!data.visionPitch || data.visionPitch.length < 20)) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please describe your vision or problem (min 20 characters).", path: ['visionPitch'] });
    }
    if (data.applicationType === 'Incubator Application') {
        const hasLinkedIn = data.linkedinUrl && data.linkedinUrl.length > 'https://linkedin.com/in/'.length;
        const hasGitHub = data.githubUrl && data.githubUrl.length > 'https://github.com/'.length;
        const hasWebsite = data.websiteUrl && data.websiteUrl.length > 'https://'.length;

        if (!hasLinkedIn && !hasGitHub && !hasWebsite) {
            ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please provide at least one link (LinkedIn, GitHub, or personal site).", path: ['linkedinUrl'] });
        }
        if (!data.visionPitch || data.visionPitch.length < 20) {
            ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please tell us why you want to join (min 20 characters).", path: ['visionPitch'] });
        }
    }
    if (data.applicationType === 'Career Inquiry') {
        if (!data.roleInterest || data.roleInterest.length < 1) {
             ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please specify your role or area of interest.", path: ['roleInterest'] });
        }
        if (!data.resumeUrl || !z.string().url().safeParse(data.resumeUrl).success) {
            ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please provide a valid link to your resume/CV.", path: ['resumeUrl'] });
        }
        if (!data.message || data.message.length < 20) {
            ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please provide a brief message (min 20 characters).", path: ['message'] });
        }
    }
    if (data.applicationType === 'Partnership Inquiry') {
        if (!data.companyName || data.companyName.length < 1) {
            ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please enter your company name.", path: ['companyName'] });
        }
        if (!data.partnershipInterest || data.partnershipInterest.length < 20) {
            ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please describe your challenge or interest in partnering (min 20 characters).", path: ['partnershipInterest'] });
        }
    }
});

const countryCodes = [
    { value: '+65', label: 'Singapore (+65)' },
    { value: '+1', label: 'Canada (+1)' },
    { value: '+1', label: 'USA (+1)' },
    { value: '+44', label: 'UK (+44)' },
    { value: '+91', label: 'India (+91)' },
    { value: '+86', label: 'China (+86)' },
    { value: '+81', label: 'Japan (+81)' },
    { value: '+49', label: 'Germany (+49)' },
    { value: '+33', label: 'France (+33)' },
    { value: '+61', label: 'Australia (+61)' },
    { value: '+234', label: 'Nigeria (+234)'},
    { value: '+27', label: 'South Africa (+27)'},
    { value: '+55', label: 'Brazil (+55)'},
    { value: '+7', label: 'Russia (+7)'}
];

export default function ApplyPage() {
    const { toast } = useToast();
    const firestore = useFirestore();
    const [submissionSuccess, setSubmissionSuccess] = useState(false);
    const [mailtoLink, setMailtoLink] = useState('');


    useEffect(() => {
      document.title = "Apply to Eve Count | EveCount.com";
    }, []);

    const form = useForm<z.infer<typeof applicationSchema>>({
        resolver: zodResolver(applicationSchema),
        defaultValues: {
            submitterName: "",
            contactEmail: "",
            countryCode: "",
            localPhone: "",
            companyName: "",
            visionPitch: "",
            linkedinUrl: "https://linkedin.com/in/",
            githubUrl: "https://github.com/",
            websiteUrl: "https://",
            roleInterest: "",
            resumeUrl: "",
            partnershipInterest: "",
            message: "",
            terms: false,
        },
    });

    const applicationType = form.watch("applicationType");

    async function onSubmit(values: z.infer<typeof applicationSchema>) {
        if (!firestore) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Could not connect to the database. Please try again later.",
            });
            return;
        }

        const { terms, countryCode, localPhone, ...submissionValues } = values;

        const submissionData = {
            ...submissionValues,
            contactPhone: `${countryCode} ${localPhone}`,
            submissionDate: new Date().toISOString(),
            status: 'New' as const,
        };
        
        const submissionsCollection = collection(firestore, 'submissions');
        addDocumentNonBlocking(submissionsCollection, submissionData);

        toast({
            title: "Application Received",
            description: "Thank you for your interest! We've received your submission and will be in touch via email shortly.",
        });

        // Create the mailto link
        const subject = `Eve Count Application Submission: ${submissionData.applicationType}`;
        
        let bodyContent = `This is a copy of my submission for your records.\n\n---\n`;
        const keyMap: { [key: string]: string } = {
            applicationType: 'Application Type',
            submitterName: 'Name',
            contactEmail: 'Email',
            contactPhone: 'Phone',
            companyName: 'Company Name',
            visionPitch: 'Vision/Interest',
            linkedinUrl: 'LinkedIn',
            githubUrl: 'GitHub',
            websiteUrl: 'Website',
            roleInterest: 'Role of Interest',
            resumeUrl: 'Resume',
            partnershipInterest: 'Partnership Interest',
            message: 'Message',
        };

        for (const [key, value] of Object.entries(submissionData)) {
            if (value && keyMap[key]) {
                bodyContent += `${keyMap[key]}: ${value}\n`;
            }
        }
        bodyContent += `---`;

        const mailto = `mailto:gwen@evecount.com?cc=${submissionData.contactEmail}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;
        
        setMailtoLink(mailto);
        setSubmissionSuccess(true);
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-16 md:py-24">
                <div className="container max-w-4xl">
                    <div className="mb-12 text-center">
                        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Apply to Eve Count</h1>
                        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                            Whether you're pitching a new venture, looking to join our incubator, seeking a new career, or wanting to partner with us, this is the right place to start.
                        </p>
                    </div>
                    <Card className="bg-secondary/20 text-foreground">
                        <CardHeader>
                            <CardTitle>Universal Application</CardTitle>
                            <CardDescription>Tell us how you'd like to get involved.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {submissionSuccess ? (
                                <div className="text-center p-4">
                                    <CardTitle className="mb-2 text-2xl font-bold">Thank You!</CardTitle>
                                    <CardDescription className="mb-6 text-muted-foreground">
                                        Your application has been successfully submitted. We'll be in touch soon.
                                        <br />
                                        For your own records, and as a backup, you can email a copy of your submission.
                                    </CardDescription>
                                    <Button asChild size="lg">
                                        <a href={mailtoLink}>
                                            <Send className="mr-2 h-4 w-4" />
                                            Email a Copy to Yourself & Eve Count
                                        </a>
                                    </Button>
                                </div>
                            ) : (
                               <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                        <FormField
                                            control={form.control}
                                            name="applicationType"
                                            render={({ field }) => (
                                                <FormItem className="space-y-3">
                                                    <FormLabel>How would you like to engage with us? *</FormLabel>
                                                    <FormControl>
                                                        <RadioGroup
                                                            onValueChange={field.onChange}
                                                            defaultValue={field.value}
                                                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                                                        >
                                                            {applicationTypes.map(type => (
                                                                <FormItem key={type} className="flex items-center space-x-3 space-y-0">
                                                                    <FormControl>
                                                                        <RadioGroupItem value={type} />
                                                                    </FormControl>
                                                                    <FormLabel className="font-normal">{type}</FormLabel>
                                                                </FormItem>
                                                            ))}
                                                        </RadioGroup>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        {applicationType && (
                                            <>
                                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                    <FormField
                                                        control={form.control}
                                                        name="submitterName"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Your Name *</FormLabel>
                                                                <FormControl><Input placeholder="Your Name" {...field} /></FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name="contactEmail"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Contact Email *</FormLabel>
                                                                <FormControl><Input type="email" placeholder="you@company.com" {...field} /></FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>
                                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-[150px_1fr]">
                                                    <FormField
                                                        control={form.control}
                                                        name="countryCode"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Country Code *</FormLabel>
                                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                    <FormControl>
                                                                        <SelectTrigger>
                                                                            <SelectValue placeholder="Code" />
                                                                        </SelectTrigger>
                                                                    </FormControl>
                                                                    <SelectContent>
                                                                        {countryCodes.map((country) => (
                                                                            <SelectItem key={country.label} value={country.value}>{country.label}</SelectItem>
                                                                        ))}
                                                                    </SelectContent>
                                                                </Select>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name="localPhone"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Phone Number *</FormLabel>
                                                                <FormControl><Input type="tel" placeholder="Your phone number" {...field} /></FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>

                                                {applicationType === 'Venture Pitch' && (
                                                    <>
                                                        <FormField
                                                            control={form.control}
                                                            name="companyName"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel>Company Name (Optional)</FormLabel>
                                                                    <FormControl><Input placeholder="Your Company Inc." {...field} /></FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                        <FormField
                                                            control={form.control}
                                                            name="visionPitch"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel>The Vision or Problem *</FormLabel>
                                                                    <FormControl><Textarea placeholder="Describe the problem you're solving, your proposed solution, and the core insight..." rows={5} {...field} /></FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                            <FormField
                                                                control={form.control}
                                                                name="linkedinUrl"
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormLabel>LinkedIn Profile (Optional)</FormLabel>
                                                                        <FormControl><Input {...field} /></FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                            <FormField
                                                                control={form.control}
                                                                name="githubUrl"
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormLabel>GitHub Profile (Optional)</FormLabel>
                                                                        <FormControl><Input {...field} /></FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                        </div>
                                                        <FormField
                                                            control={form.control}
                                                            name="websiteUrl"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel>Company Website (Optional)</FormLabel>
                                                                    <FormControl><Input {...field} /></FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </>
                                                )}

                                                {applicationType === 'Incubator Application' && (
                                                    <>
                                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                            <FormField
                                                                control={form.control}
                                                                name="linkedinUrl"
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormLabel>LinkedIn Profile *</FormLabel>
                                                                        <FormControl><Input {...field} /></FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                            <FormField
                                                                control={form.control}
                                                                name="githubUrl"
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormLabel>GitHub Profile</FormLabel>
                                                                        <FormControl><Input {...field} /></FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                        </div>
                                                        <FormField
                                                            control={form.control}
                                                            name="websiteUrl"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel>Personal Website</FormLabel>
                                                                    <FormControl><Input {...field} /></FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                        <FormField
                                                            control={form.control}
                                                            name="visionPitch"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel>Why do you want to join the incubator? *</FormLabel>
                                                                    <FormControl><Textarea placeholder="Tell us about your domain expertise, your goals, and what you hope to build." rows={5} {...field} /></FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </>
                                                )}

                                                {applicationType === 'Career Inquiry' && (
                                                    <>
                                                        <FormField
                                                            control={form.control}
                                                            name="roleInterest"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel>Role / Area of Interest *</FormLabel>
                                                                    <FormControl><Input placeholder="e.g., AI Engineer, Full-Stack Developer" {...field} /></FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                        <FormField
                                                            control={form.control}
                                                            name="resumeUrl"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel>Resume / CV Link *</FormLabel>
                                                                    <FormControl><Input placeholder="https://example.com/your-resume.pdf" {...field} /></FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                            <FormField
                                                                control={form.control}
                                                                name="linkedinUrl"
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormLabel>LinkedIn Profile (Optional)</FormLabel>
                                                                        <FormControl><Input {...field} /></FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                            <FormField
                                                                control={form.control}
                                                                name="githubUrl"
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormLabel>GitHub Profile (Optional)</FormLabel>
                                                                        <FormControl><Input {...field} /></FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                        </div>
                                                        <FormField
                                                            control={form.control}
                                                            name="websiteUrl"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel>Personal Website (Optional)</FormLabel>
                                                                    <FormControl><Input {...field} /></FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                        <FormField
                                                            control={form.control}
                                                            name="message"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel>Message / Cover Letter *</FormLabel>
                                                                    <FormControl><Textarea placeholder="Tell us a bit about yourself and why you're a good fit." rows={5} {...field} /></FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </>
                                                )}
                                                
                                                {applicationType === 'Partnership Inquiry' && (
                                                    <>
                                                         <FormField
                                                            control={form.control}
                                                            name="companyName"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel>Company Name *</FormLabel>
                                                                    <FormControl><Input placeholder="Your Company Inc." {...field} /></FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                        <FormField
                                                            control={form.control}
                                                            name="partnershipInterest"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel>Challenge or Partnership Interest *</FormLabel>
                                                                    <FormControl><Textarea placeholder="Describe your business challenge, or how you'd like to partner with us (e.g., Service Partner, Event Sponsor)." rows={5} {...field} /></FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                            <FormField
                                                                control={form.control}
                                                                name="linkedinUrl"
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormLabel>LinkedIn Profile (Optional)</FormLabel>
                                                                        <FormControl><Input {...field} /></FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                            <FormField
                                                                control={form.control}
                                                                name="githubUrl"
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormLabel>GitHub Profile (Optional)</FormLabel>
                                                                        <FormControl><Input {...field} /></FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                        </div>
                                                        <FormField
                                                            control={form.control}
                                                            name="websiteUrl"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel>Company Website (Optional)</FormLabel>
                                                                    <FormControl><Input {...field} /></FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </>
                                                )}

                                                <FormField
                                                    control={form.control}
                                                    name="terms"
                                                    render={({ field }) => (
                                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-input bg-background/50 p-4 shadow">
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={field.value}
                                                                    onCheckedChange={field.onChange}
                                                                />
                                                            </FormControl>
                                                            <div className="space-y-1 leading-none">
                                                                <FormLabel>
                                                                    Acknowledge and Agree
                                                                </FormLabel>
                                                                <FormDescription>
                                                                    By submitting this form, you acknowledge that you have read and agree to our{' '}
                                                                    <Link href="/terms" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">Terms & Conditions</Link> and{' '}
                                                                    <Link href="/privacy" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>.
                                                                    You agree to be contacted by Eve Count regarding your application.
                                                                </FormDescription>
                                                                <FormMessage />
                                                            </div>
                                                        </FormItem>
                                                    )}
                                                />

                                                <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                                                    <Send className="mr-2 h-4 w-4" />
                                                    {form.formState.isSubmitting ? "Submitting..." : "Submit Application"}
                                                </Button>
                                            </>
                                        )}
                                    </form>
                                </Form>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}
