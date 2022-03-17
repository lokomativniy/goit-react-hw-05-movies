import { Route, Routes } from 'react-router-dom';
import Container from './components/Container/Container.jsx';
import Appbar from './components/Appbar/Appbar.jsx';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import Loader from './components/Loader/Loader.jsx';

const HomePage = lazy(() => import('./views/HomePage/HomePage.jsx'));
const MoviesPage = lazy(() => import('./views/MoviesPage/MoviesPage.jsx'));
const MovieDetails = lazy(() =>
  import('./views/MovieDetailsPage/MovieDetailsPage.jsx'),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView/NotFoundView.jsx'),
);
const Cast = lazy(() => import('./views/Cast/Cast.jsx'));
const Reviews = lazy(() => import('./views/Reviews/Reviews.jsx'));

export default function App() {
  return (
    <Container>
      <ToastContainer autoClose={2000} />
      <Appbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieid" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
