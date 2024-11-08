import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";

const formspreeApi = "https://formspree.io/f/mdkogvoy";

export default function ContactPage() {
  const navigate = useNavigate();
  const [service, setService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);
      formData.append("service", service); // Manually add service since Select is controlled

      const response = await fetch(formspreeApi, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        navigate("/thank-you"); // Redirect to thank you page
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Contact Us
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  We're here to help. Fill out the form below and we'll get back
                  to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>
                  Please provide your details and we'll be in touch shortly.
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="service">Desired Service</Label>
                      <Select
                        value={service}
                        onValueChange={setService}
                        required
                      >
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="website">
                            Website Development
                          </SelectItem>
                          <SelectItem value="consulting">
                            Tech Consulting
                          </SelectItem>
                          <SelectItem value="cloud">
                            Cloud & App Development
                          </SelectItem>
                          <SelectItem value="seo">SEO</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        placeholder="Any additional information or questions?"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}