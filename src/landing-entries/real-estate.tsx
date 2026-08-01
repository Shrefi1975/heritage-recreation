import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RealEstateRentalLanding from '../pages/landing/RealEstateRental';
import '../index.css';

const WA = 'https://wa.me/23565555504';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <RealEstateRentalLanding contactHref={WA} />
  </BrowserRouter>
);
