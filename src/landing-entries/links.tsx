import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import LinksPage from '../pages/Links';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <LinksPage />
  </BrowserRouter>
);
