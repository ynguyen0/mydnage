// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/navbar.tsx";
import About from "./components/about/about.tsx";
import LogoMark from "./components/logomark/LogoMark.tsx";
import Product from "./components/products/product.tsx";
import Landing from "./components/landing/landing.tsx";
import Footer from "./components/footer/Footer.tsx";
import Dog from "./components/dog-products/dogproducts.tsx";
import ClinicInquiries from "./components/clinicinquiry/clinicinquiry.tsx";
import HowItWorks from "./components/howitworks/howitworks.tsx";
import Terms from "./components/terms/terms.tsx"; // ADD THIS LINE
import PrivacyPolicy from "./components/privacypolicy/privacy.tsx"; // ADD THIS LINE
import "./index.css";

const AppLayout = () => (
  <div className="relative">
    <LogoMark className="absolute left-8 top-8 md:left-20 md:top-20" />
    <Navbar />
    <div className="pt-20">
      <Outlet />
    </div>
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/home", element: <Landing /> },
      { path: "/how-it-works", element: <HowItWorks /> },
      { path: "/myDNAge", element: <Product /> },
      { path: "/myDogDNAge", element: <Dog /> },
      { path: "/our-science", element: <About /> },
      { path: "/clinic-inquiry", element: <ClinicInquiries /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> }, // THIS SHOULD BE HERE
      { path: "/terms", element: <Terms /> }, // THIS SHOULD BE HERE
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
