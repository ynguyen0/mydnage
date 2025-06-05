import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter, Outlet} from 'react-router-dom'
import Navbar from './components/navbar.tsx'
import './index.css'
import App from './App.tsx'

const DummyPage = ({ label }: {label: string}) => (
  <div className='p-8 text-lg'>You are on: {label}</div>
);

const AppLayout = () => (
  <>
    <Navbar />
    <div className='pt-20'>
      <Outlet />
    </div>
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <DummyPage label="Home" />},
      { path: '/myDNAge', element: <DummyPage label="myDNAge" />},
      { path: '/myDogDNAge', element: <DummyPage label="myDogDNAge" />},
      { path: '/our-science', element: <DummyPage label="Our Science" />},
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
