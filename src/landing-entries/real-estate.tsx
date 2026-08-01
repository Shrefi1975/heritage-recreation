import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RealEstateRentalLanding from '../pages/landing/RealEstateRental';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <RealEstateRentalLanding />
  </BrowserRouter>
);
