import "./App.css";
import LandingPage from "./components/landing-page";
import PageAbout from "./routes/about/page";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageContact from "./routes/contact/page";
import PageTerms from "./routes/terms/page";

function App() {
  const router = createBrowserRouter(
    [
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
    ],
    {
      basename: process.env.PUBLIC_URL,
    }
  );

  return <RouterProvider router={router} />;
}

export default App;
