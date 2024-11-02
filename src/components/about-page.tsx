import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Laptop, Users, Briefcase, Code, CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="/">
          <Laptop className="h-6 w-6 mr-2" />
          <span className="font-bold">Smeiling Tech Consulting</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/"
          >
            Home
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#team"
          >
            Our Team
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#values"
          >
            Our Values
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  About Smeiling Tech Consulting
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Bridging the gap between technology and business growth
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Founder of Smeiling Tech Consulting"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Our Story
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    As a software developer with a diverse background in sales,
                    management, and business consulting, I've discovered my true
                    passion lies in software and web development. This unique
                    blend of experiences has given me a holistic understanding
                    of both the technical and business aspects of successful
                    projects.
                  </p>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    My journey has led me to assemble a talented team of
                    designers, consultants, and developers. Together, we create
                    high-quality products that drive business growth. Our
                    collective expertise allows us to not just build software,
                    but to craft solutions that align with our clients' business
                    objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="team" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Team
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Users className="h-12 w-12 mb-2" />
                  <h3 className="text-xl font-bold">Experienced Designers</h3>
                  <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                    Crafting intuitive and visually appealing interfaces
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Briefcase className="h-12 w-12 mb-2" />
                  <h3 className="text-xl font-bold">Skilled Consultants</h3>
                  <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                    Providing strategic insights for your business growth
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Code className="h-12 w-12 mb-2" />
                  <h3 className="text-xl font-bold">Expert Developers</h3>
                  <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                    Building robust and scalable software solutions
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Laptop className="h-12 w-12 mb-2" />
                  <h3 className="text-xl font-bold">Tech-Savvy Leader</h3>
                  <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                    Guiding projects with technical and business acumen
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="values"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Values
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <CheckCircle className="h-12 w-12 mb-2" />
                  <h3 className="text-xl font-bold">Honesty</h3>
                  <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                    We believe in transparent communication and ethical business
                    practices
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <CheckCircle className="h-12 w-12 mb-2" />
                  <h3 className="text-xl font-bold">Dependability</h3>
                  <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                    We deliver on our promises and meet deadlines consistently
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <CheckCircle className="h-12 w-12 mb-2" />
                  <h3 className="text-xl font-bold">Value-Driven</h3>
                  <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                    We provide rock-solid value that contributes to your
                    project's success
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Let's work together to bring your vision to life and drive
                  your business forward.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Smeiling Tech Consulting. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="/terms">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}