import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
// import App from './App';
// import About from './comp/About/About';
// import Portfolio from './comp/Portfolio/Portfolio';
// import PortfolioContent from './comp/PortfolioContent/PortfolioContent';
// import PortfolioContentDetail from './comp/PortfolioContent/PortfolioContentDetail';
// import Exp from './comp/Exp/Exp';
// import Contact from './comp/Contact/Contact';
import reportWebVitals from './reportWebVitals';
import Spinner from './comp/Spinner/Spinner';

const App = lazy(() => import('./App'));
const About = lazy(() => import('./comp/About/About'));
const Portfolio = lazy(() => import('./comp/Portfolio/Portfolio'));
const PortfolioContent = lazy(() =>
  import('./comp/PortfolioContent/PortfolioContent')
);
const PortfolioContentDetail = lazy(() =>
  import('./comp/PortfolioContent/PortfolioContentDetail')
);
const Contact = lazy(() => import('./comp/Contact/Contact'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/profile" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route
            path="/portfolioContent/:portfolioId"
            element={<PortfolioContent />}
          />
          <Route
            path="/portfolioContent/:portfolioId/portfolioContentDetail/:imgPortId"
            element={<PortfolioContentDetail />}
          />
          {/* <Route path="/experience" element={<Exp />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// <Route path="/home" element={<Header />} />
reportWebVitals();
