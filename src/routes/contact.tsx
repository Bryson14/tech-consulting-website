import ContactPage from "@/components/contact-page";
import { Helmet } from "react-helmet";

export default function PageContact() {
  return (
    <>
      <Helmet>
        <title>
          Contact Smiling Tech Consulting - Let's Build Something Great
        </title>
        <meta
          name="description"
          content="Have questions about your web project? We're here to help! Reach out for friendly, expert advice on web development, hosting, and digital optimization."
        />
      </Helmet>
      <ContactPage />
    </>
  );
}
