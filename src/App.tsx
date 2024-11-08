import "./App.css";
import LandingPage from "./components/landing-page";
import PageAbout from "./routes/about/page";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageContact from "./routes/contact/page";
import PageTerms from "./routes/terms/page";
import ClientShowcase from "./routes/clients/client-showcase";
import CrockerVentures from "./routes/clients/crocker-ventures";
import SublimeEventsDecor from "./routes/clients/sublime-events-decor";
import TheMassapequatutor from "./routes/clients/the-massapequa-tutor";

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
      path: "/clients/tmt",
      element: <TheMassapequatutor />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
