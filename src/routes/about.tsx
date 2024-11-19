import AboutPage from "@/components/about-page";
import { Helmet } from "react-helmet";

export default function PageAbout() {
  return (
    <>
      <Helmet>
        <title>About Smiling Tech Consulting - Modern Web Solutions</title>
        <meta
          name="description"
          content="Meet the team behind Smiling Tech Consulting. We're passionate developers and consultants dedicated to creating exceptional digital experiences through custom web solutions."
        />
      </Helmet>
      <AboutPage />
    </>
  );
}
