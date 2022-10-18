import { createBrowserRouter } from 'react-router-dom';
import Root from './root/Root';
import ErrorPage from './error/ErrorPage';
import Home from './pages/home/Home';
import Category from './pages/category/Category';
import News from './pages/news/News';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'category/:id',
        element: <Category />,
      },
      {
        path: 'news/:id',
        element: <News />,
      },
    ],
  },
]);

export default router;
