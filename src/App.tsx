import "./App.css";
import LandingPage from "./components/landing-page";
import PageAbout from "./routes/about";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageContact from "./routes/contact";
import PageTerms from "./routes/terms/page";
import ClientShowcase from "./routes/clients/client-showcase";
import CrockerVentures from "./routes/clients/crocker-ventures";
import SublimeEventsDecor from "./routes/clients/sublime-events-decor";
import TheMassapequaTutor from "./routes/clients/the-massapequa-tutor";
import SorensonLegacyFoundation from "./routes/clients/sorenson-legacy-foundation";
import ThankYouPage from "./routes/thank-you";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/about",
      element: <PageAbout />,
    },
    {
      path: "/contact",
      element: <PageContact />,
    },
    {
      path: "/thank-you",
      element: <ThankYouPage />,
    },
    {
      path: "/terms",
      element: <PageTerms />,
    },
    {
      path: "/clients",
      element: <ClientShowcase />,
    },
    {
      path: "/clients/crocker-ventures",
      element: <CrockerVentures />,
    },
    {
      path: "/clients/sublime-events",
      element: <SublimeEventsDecor />,
    },
    {
      path: "/clients/the-massapequa-tutor",
      element: <TheMassapequaTutor />,
    },
    {
      path: "/clients/sorenson-legacy-foundation",
      element: <SorensonLegacyFoundation />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
