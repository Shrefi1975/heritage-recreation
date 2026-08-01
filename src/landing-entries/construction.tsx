import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ConstructionContractingLanding from '../pages/landing/ConstructionContracting';
import '../index.css';

const WA = 'https://wa.me/23565555504';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ConstructionContractingLanding contactHref={WA} />
  </BrowserRouter>
);
