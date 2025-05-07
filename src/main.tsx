import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'; // Fixed import
import { store } from './redux/store.ts';
import { CookiesProvider } from 'react-cookie';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter> {/* This is the main router */}
        <CookiesProvider defaultSetOptions={{ path: '/' }}>
          <App /> {/* App is now inside the router */}
        </CookiesProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);