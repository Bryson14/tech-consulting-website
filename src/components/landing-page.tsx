import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Laptop, Cloud, Search, Code } from "lucide-react";
import Header from "@/components/header";
import Footer from "./footer";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Smiling Tech Consulting
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Your partner for website development, tech consulting, cloud
                  and app development, and SEO.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#services">Our Services</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Services
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <Code className="h-6 w-6 mb-2" />
                  <CardTitle>Website Development</CardTitle>
                  <CardDescription>
                    Custom websites tailored to your needs
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Laptop className="h-6 w-6 mb-2" />
                  <CardTitle>Tech Consulting</CardTitle>
                  <CardDescription>
                    Expert advice on your tech stack
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Cloud className="h-6 w-6 mb-2" />
                  <CardTitle>Cloud & App Development</CardTitle>
                  <CardDescription>
                    Scalable cloud solutions and app creation
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Search className="h-6 w-6 mb-2" />
                  <CardTitle>SEO</CardTitle>
                  <CardDescription>
                    Boost your online visibility
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Ready to elevate your tech game? Contact us today for a
                  consultation.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
