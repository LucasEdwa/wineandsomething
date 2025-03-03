import { createBrowserRouter } from 'react-router';
import { ThemeProvider } from './context/ThemeContext';
import HeroSection from './components/HeroSection';
import { Layout } from './pages/Layout';
import { NotFound } from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    ),
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <HeroSection /> },
    ],
  },
]);

export default router;