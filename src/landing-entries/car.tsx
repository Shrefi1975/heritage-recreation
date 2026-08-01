import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CarRentalLanding from '../pages/landing/CarRental';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <CarRentalLanding />
  </BrowserRouter>
);
