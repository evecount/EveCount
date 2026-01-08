"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { submitVisionPitch } from "@/app/actions";
import { visionPitchSchema } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, CheckCircle, XCircle, ExternalLink } from "lucide-react";
import type { AiLeadGatekeeperOutput } from "@/ai/flows/ai-lead-gatekeeper";
import Link from "next/link";

type VisionPitchFormValues = z.infer<typeof visionPitchSchema>;

export function LeadIntake() {
  const { toast } = useToast();
  const [formResult, setFormResult] = useState<AiLeadGatekeeperOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<VisionPitchFormValues>({
    resolver: zodResolver(visionPitchSchema),
    defaultValues: {
      partnerName: "",
      partnerEmail: "",
      visionPitch: "",
    },
  });

  async function onSubmit(data: VisionPitchFormValues) {
    setIsLoading(true);
    setFormResult(null);

    const response = await submitVisionPitch(data);

    if (response.success && response.data) {
      toast({
        title: "Pitch Analyzed",
        description: "Our AI has reviewed your submission.",
      });
      setFormResult(response.data);
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: response.message,
      });
      // Handle field errors if any
      if (response.errors) {
        response.errors.forEach(err => {
          form.setError(err.path[0] as keyof VisionPitchFormValues, { message: err.message });
        });
      }
    }
    setIsLoading(false);
  }

  return (
    <section id="partner-up" className="bg-background py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <Card className="bg-card text-card-foreground">
            <CardHeader className="text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Partner With Us
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
              Have a vision? Pitch it to our AI Gatekeeper. If it aligns, we'll schedule a Foundry Session.
              </p>
            </CardHeader>
            <CardContent>
              {!formResult ? (
                <div>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="partnerName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Jane Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="partnerEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Email</FormLabel>
                            <FormControl>
                              <Input placeholder="jane.doe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      </div>
                      <FormField
                        control={form.control}
                        name="visionPitch"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Vision Pitch</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe your vision... (min 50 characters)"
                                className="min-h-[150px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" disabled={isLoading} className="w-full">
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Submit to AI Gatekeeper
                      </Button>
                    </form>
                  </Form>
                </div>
              ) : (
                <div className="text-center animate-in fade-in duration-500">
                  {formResult.shouldScheduleSession ? (
                      <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
                  ) : (
                      <XCircle className="mx-auto h-16 w-16 text-red-500 mb-4" />
                  )}
                  <h3 className="text-2xl font-bold mb-2">
                      {formResult.shouldScheduleSession ? "Alignment Confirmed" : "Assessment Complete"}
                  </h3>
                  <p className="text-muted-foreground mb-6">{formResult.reason}</p>
                  {formResult.shouldScheduleSession && formResult.openHoursUrl && (
                    <Button asChild size="lg">
                      <Link href={formResult.openHoursUrl} target="_blank" rel="noopener noreferrer">
                        Schedule Foundry Session <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  <Button variant="outline" className="mt-6 w-full max-w-sm" onClick={() => setFormResult(null)}>
                    Submit Another Pitch
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
