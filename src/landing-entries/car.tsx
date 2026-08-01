import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CarRentalLanding from '../pages/landing/CarRental';
import '../index.css';

const WA = 'https://wa.me/23565555504';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <CarRentalLanding contactHref={WA} />
  </BrowserRouter>
);
