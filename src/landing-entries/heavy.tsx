import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import HeavyEquipmentRentalLanding from '../pages/landing/HeavyEquipmentRental';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <HeavyEquipmentRentalLanding />
  </BrowserRouter>
);
