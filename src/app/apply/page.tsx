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
    portfolioUrl: z.string().optional(),
    roleInterest: z.string().optional(),
    resumeUrl: z.string().optional(),
    partnershipInterest: z.string().optional(),
    message: z.string().optional(),
}).superRefine((data, ctx) => {
    if (data.applicationType === 'Venture Pitch' && (!data.visionPitch || data.visionPitch.length < 20)) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please describe your vision or problem (min 20 characters).", path: ['visionPitch'] });
    }
    if (data.applicationType === 'Incubator Application') {
        if (!data.portfolioUrl || !z.string().url().safeParse(data.portfolioUrl).success) {
            ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please provide a valid URL to your portfolio, LinkedIn, or GitHub.", path: ['portfolioUrl'] });
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
        if (data.portfolioUrl && !z.string().url().safeParse(data.portfolioUrl).success) {
            ctx.addIssue({ code: z.ZodIssueCode.custom, message: "If providing a portfolio link, it must be a valid URL.", path: ['portfolioUrl'] });
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
    { value: '+1', label: 'USA / Canada (+1)' },
    { value: '+44', label: 'UK (+44)' },
    { value: '+65', label: 'Singapore (+65)' },
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
            portfolioUrl: "",
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
            status: 'New',
        };
        
        const submissionsCollection = collection(firestore, 'submissions');
        addDocumentNonBlocking(submissionsCollection, submissionData);

        toast({
            title: "Application Received",
            description: "Thank you for your interest! We've received your submission and will be in touch via email shortly.",
        });
        form.reset();
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
                                                                        <SelectItem key={country.value} value={country.value}>{country.label}</SelectItem>
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
                                                </>
                                            )}

                                            {applicationType === 'Incubator Application' && (
                                                <>
                                                    <FormField
                                                        control={form.control}
                                                        name="portfolioUrl"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Portfolio Link (LinkedIn, GitHub, etc) *</FormLabel>
                                                                <FormControl><Input placeholder="https://linkedin.com/in/yourprofile" {...field} /></FormControl>
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
                                                    <FormField
                                                        control={form.control}
                                                        name="portfolioUrl"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Portfolio Link (Optional)</FormLabel>
                                                                <FormControl><Input placeholder="https://github.com/yourprofile" {...field} /></FormControl>
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
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}
