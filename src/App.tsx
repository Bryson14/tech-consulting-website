import "./App.css";
import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/root-layout";
import HomePage from "./routes/home";

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900" />
  </div>
);

// Lazy load components
const PageAbout = lazy(() => import("./routes/about"));
const PageContact = lazy(() => import("./routes/contact"));
const PageTerms = lazy(() => import("./routes/terms/page"));
const ClientShowcase = lazy(() => import("./routes/clients/client-showcase"));
const ThankYouPage = lazy(() => import("./routes/thank-you"));

// Lazy load client pages in a separate chunk
const ClientPages = {
  CrockerVentures: lazy(() => import("./routes/clients/crocker-ventures")),
  SublimeEventsDecor: lazy(
    () => import("./routes/clients/sublime-events-decor"),
  ),
  AvalLegal: lazy(() => import("./routes/clients/aval-legal")),
  MassapequaTutor: lazy(() => import("./routes/clients/the-massapequa-tutor")),
  SorensonLegacy: lazy(
    () => import("./routes/clients/sorenson-legacy-foundation"),
  ),
};

// Lazy load client pages in a separate chunk
const ServicesPages = {
  CloudDev: lazy(() => import("./routes/services/cloud-dev-page")),
  Seo: lazy(() => import("./routes/services/seo-page")),
  TechConsulting: lazy(
    () => import("./routes/services/technical-consulting-page"),
  ),
  WebDev: lazy(() => import("./routes/services/web-dev-page")),
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <PageAbout />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <PageContact />
            </Suspense>
          ),
        },
        {
          path: "/thank-you",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <ThankYouPage />
            </Suspense>
          ),
        },
        {
          path: "/terms",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <PageTerms />
            </Suspense>
          ),
        },
        {
          path: "/clients",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <ClientShowcase />
            </Suspense>
          ),
        },
        {
          path: "/clients/crocker-ventures",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <ClientPages.CrockerVentures />
            </Suspense>
          ),
        },
        {
          path: "/clients/sublime-events",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <ClientPages.SublimeEventsDecor />
            </Suspense>
          ),
        },
        {
          path: "/clients/the-massapequa-tutor",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <ClientPages.MassapequaTutor />
            </Suspense>
          ),
        },
        {
          path: "/clients/sorenson-legacy-foundation",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <ClientPages.SorensonLegacy />
            </Suspense>
          ),
        },
        {
          path: "/clients/aval-legal",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <ClientPages.AvalLegal />
            </Suspense>
          ),
        },
        {
          path: "/services/web-development",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <ServicesPages.WebDev />
            </Suspense>
          ),
        },
        {
          path: "/services/tech-consulting",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <ServicesPages.TechConsulting />
            </Suspense>
          ),
        },
        {
          path: "/services/cloud-backend-development",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <ServicesPages.CloudDev />
            </Suspense>
          ),
        },
        {
          path: "/services/seo",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <ServicesPages.Seo />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
