import ClientPage from "@/components/client-details";
import landingPage from "/clients/crocker-ventures/landing_page.jpeg";
import logo from "/clients/crocker-ventures/crocker-ventures-logo.jpeg";

export default function CrockerVentures() {
  const clientData = {
    id: 1,
    name: "Crocker Ventures",
    description:
      "Website maintained and enhanced for Utah based Venture Capital Firm",
    longDescription:
      "Built on Wordpress, the site need some TLC to bring it up to date. Additionally, it was very fragile as it had last been updated in 2016. It's Wordpress version and other themes were out of data as well a lots of the contents. Smiling Tech Consulting cam eot rescue for a quick and efficient fix for this companies website.",
    image: logo,
    url: "https://crockerventures.com",
    projectImages: [landingPage],
  };
  return <ClientPage {...clientData} />;
}
