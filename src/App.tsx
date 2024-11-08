import "./App.css";
import LandingPage from "./components/landing-page";
import PageAbout from "./routes/about";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageContact from "./routes/contact";
import PageTerms from "./routes/terms/page";
import ClientShowcase from "./routes/clients/client-showcase";
import CrockerVenturesPage from "./routes/clients/crocker-ventures";
import SublimeEventsDecorPage from "./routes/clients/sublime-events-decor";
import TheMassapequaTutorPage from "./routes/clients/the-massapequa-tutor";
import SorensonLegacyFoundationPage from "./routes/clients/sorenson-legacy-foundation";
import ThankYouPage from "./routes/thank-you";
import RootLayout from "./components/root-layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
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
          element: <CrockerVenturesPage />,
        },
        {
          path: "/clients/sublime-events",
          element: <SublimeEventsDecorPage />,
        },
        {
          path: "/clients/the-massapequa-tutor",
          element: <TheMassapequaTutorPage />,
        },
        {
          path: "/clients/sorenson-legacy-foundation",
          element: <SorensonLegacyFoundationPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
