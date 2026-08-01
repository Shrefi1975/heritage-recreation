import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import SecuritySystemsLanding from '../pages/landing/SecuritySystems';
import '../index.css';

const WA = 'https://wa.me/23565555504';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <SecuritySystemsLanding contactHref={WA} />
  </BrowserRouter>
);
