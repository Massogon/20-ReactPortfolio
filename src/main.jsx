import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './utils/theme';

import App from './App';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

const router = createBrowserRouter([
  {
    path: '/', // Home route
    element: <App />, // This will load the layout and Outlet
    children: [
      {
        index: true, // This renders when the path is just "/"
        element: <AboutMe />
      },
      {
        path: 'portfolio', // Path for "/portfolio"
        element: <Portfolio />
      },
      {
        path: 'resume', // Path for "/resume"
        element: <Resume />
      },
      {
        path: 'contact', // Path for "/contact"
        element: <Contact />
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
);
