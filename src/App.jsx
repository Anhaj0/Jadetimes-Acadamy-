import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home_page from './pages/Home_page';
import About_page from './pages/About_page';
import Programfinder_page from './pages/Programfinder_page';
import Admissions_page from './pages/Admissions_page';
import Blog from './pages/Blog';
import Events from './pages/Events';
import Contact_Us from './pages/Contact_Us';
import Alumni from './pages/Alumni';
import StudentResources from './pages/StudentResources';

function ConditionalHeader() {
  const location = useLocation();
  return location.pathname !== '/events' ? <Header /> : null;
}

function App() {
  return (
    <BrowserRouter>
      <ConditionalHeader />

      <main className="min-h-[80vh]">
        <Routes>
          <Route path='/'                element={<Home_page />} />
          <Route path='/about'           element={<About_page />} />
          <Route path='/programfinder'   element={<Programfinder_page />} />
          <Route path='/admissions'      element={<Admissions_page />} />
          <Route path='/blog'            element={<Blog />} />
          <Route path='/events'          element={<Events />} />
          <Route path='/contact_us'      element={<Contact_Us />} />
          <Route path='/alumni'          element={<Alumni />} />
          <Route path='StudentResources' element={<StudentResources />} />
          <Route path='*'                element={<Home_page />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
