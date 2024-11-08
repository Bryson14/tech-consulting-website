import ClientPage from "@/components/client-details";
import logo from "/clients/the-massapequa-tutor/tmt-logo.png";
import about from "/clients/the-massapequa-tutor/about.jpeg";
import classes from "/clients/the-massapequa-tutor/class-registration.jpeg";
import clientDashboard from "/clients/the-massapequa-tutor/client-dashboard.jpeg";
import landingStats from "/clients/the-massapequa-tutor/landing-stats.jpeg";
import tutorApp from "/clients/the-massapequa-tutor/tutor-app.jpeg";
import tutorDashboard from "/clients/the-massapequa-tutor/tutor-dashboard.jpeg";
import tutors from "/clients/the-massapequa-tutor/tutors.jpeg";

export default function TheMassapequatutor() {
  const clientData = {
    id: 1,
    name: "The Massapequa Tutor",
    description:
      "A beautifully designed custom website that handles all the needs of a fast growing business",
    longDescription:
      "A custom made react website that handles all interactions in the business. Built on AWS, it handles hundreds of tutors and clients weekly.",
    image: logo,
    url: "https://themassapequatutor.com/",
    projectImages: [
      tutors,
      about,
      classes,
      clientDashboard,
      tutorApp,
      tutorDashboard,
      landingStats,
    ],
  };
  return <ClientPage {...clientData} />;
}
