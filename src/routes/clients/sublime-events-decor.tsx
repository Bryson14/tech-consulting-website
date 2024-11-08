import ClientPage from "@/components/client-details";
import landingPage from "/clients/sublime-decor/landing-page-sublime.jpeg"
import services from "/clients/sublime-decor/services-sublime.jpeg"
import logo from "/clients/sublime-decor/sublime-logo.jpeg"

export default function SublimeEventsDecor() {
  const clientData = {
    id: 1,
    name: "Sublime Events and Decor",
    description:
      "A Small business looking for big results and SEO with their decor and party business",
    longDescription:
      "The owner was looking for something that was simple, quick to get going, allowed her to manage her business, incomes statement, and ",
    image: logo,
    url: "https://www.sublimeeventsdecor.com/",
    projectImages: [
      landingPage,
      services
    ],
  };
  return <ClientPage {...clientData} />;
}
