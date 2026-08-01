import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import TransportCameroonChadLanding from '../pages/landing/TransportCameroonChad';
import '../index.css';

const WA = 'https://wa.me/23565555504';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <TransportCameroonChadLanding contactHref={WA} />
  </BrowserRouter>
);
