import { createBrowserRouter } from 'react-router';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './pages/Layout';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import EventsHolder from './components/EventsHolder';
import Booking from './pages/Booking';

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
      { path: "/", element: <Home /> },
      { path: "/events", element: <EventsHolder /> },
      { path: "/booking/:eventId", element: <Booking /> },
    ],
  },
]);

export default router;