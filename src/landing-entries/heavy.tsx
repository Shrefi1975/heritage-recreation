import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import HeavyEquipmentRentalLanding from '../pages/landing/HeavyEquipmentRental';
import '../index.css';

const WA = 'https://wa.me/23565555504';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <HeavyEquipmentRentalLanding contactHref={WA} />
  </BrowserRouter>
);
