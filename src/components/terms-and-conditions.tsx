import { Laptop } from "lucide-react"

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <a className="flex items-center justify-center" href="/">
          <Laptop className="h-6 w-6 mr-2" />
          <span className="font-bold">Smeiling Tech Consulting</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-left">
              Terms and Conditions
            </h1>
            <div className="prose prose-lg max-w-none space-y-6 text-left">
              <p className="text-base leading-relaxed">
                Welcome to Smeiling Tech Consulting. These Terms and Conditions govern your use of our website and services. 
                By accessing or using our website and services, you agree to be bound by these Terms and Conditions.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Use of Services</h2>
              <p className="text-base leading-relaxed">
                Our services are provided for business and personal use. You agree not to use our services for any illegal 
                or unauthorized purpose. You must not, in the use of the service, violate any laws in your jurisdiction.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Intellectual Property</h2>
              <p className="text-base leading-relaxed">
                The content, features, and functionality of our website and services are owned by Smeiling Tech Consulting 
                and are protected by international copyright, trademark, patent, trade secret, and other intellectual 
                property or proprietary rights laws.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Content</h2>
              <p className="text-base leading-relaxed">
                You retain any and all of your rights to any content you submit, post or display on or through our services. 
                By submitting, posting or displaying content, you grant us a worldwide, non-exclusive, royalty-free license 
                to use, reproduce, adapt, publish, translate and distribute it.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitation of Liability</h2>
              <p className="text-base leading-relaxed">
                In no event shall Smeiling Tech Consulting, nor its directors, employees, partners, agents, suppliers, or 
                affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including 
                without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your 
                access to or use of or inability to access or use the services.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Termination</h2>
              <p className="text-base leading-relaxed">
                We may terminate or suspend access to our services immediately, without prior notice or liability, for any 
                reason whatsoever, including without limitation if you breach the Terms and Conditions.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Governing Law</h2>
              <p className="text-base leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without 
                regard to its conflict of law provisions.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to Terms</h2>
              <p className="text-base leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing 
                to access or use our services after those revisions become effective, you agree to be bound by the revised terms.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
              <p className="text-base leading-relaxed mb-8">
                If you have any questions about these Terms, please contact us at [Your Contact Email].
              </p>
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
          <a className="text-xs hover:underline underline-offset-4" href="/privacy">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}