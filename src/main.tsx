import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/navbar.tsx";
import About from "./components/about/about.tsx";
import LogoMark from "./components/logomark/LogoMark.tsx";
import Product from "./components/products/product.tsx";
import "./index.css";

const DummyPage = ({ label }: { label: string }) => (
  <div className="p-8 text-lg">You are on: {label}</div>
);

const AppLayout = () => (
  <div className="relative">
    <LogoMark className="absolute left-8 top-8 md:left-20 md:top-20" />
    <Navbar />
    <div className="pt-20">
      <Outlet />
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <DummyPage label="Home" /> },
      { path: "/myDNAge", element: <Product /> },
      { path: "/myDogDNAge", element: <DummyPage label="myDogDNAge" /> },
      { path: "/myDNAge", element: <Product /> },
      { path: "/our-science", element: <About /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
