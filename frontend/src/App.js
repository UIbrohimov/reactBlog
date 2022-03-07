import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Pricing from "./Pages/Pricing";
import Faq from "./Pages/Faq";
import Portfolio from "./Pages/Portfolio";
import NoPage from "./Pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* router urlpatternsga o'xshagan narsa djangodagi */}

        {/* bu yerda layoutga asosiy url berilgan, yani birinchi bo'lib layout render bo'ladi */}
        <Route path="/" element={<Layout />}>

          {/* bu yerda homega index element deb berilgan, bu birinchi bo'lib outlet contentga tushadi */}
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="faq" element={<Faq />} />
          <Route path="portfolio" element={<Portfolio />} />
          {/* har bir router bitta pagega zapros beradi, agar page topilsa o'sha page outlet o'rnida render bo'ladi */}
          {/* bu yerda * qo'yilganini sababi, agar so'ralgan router bu yerdagi birorta routega to'g'ri kelmasa * ishlaydi
          yani NoPage sahifasi ishlaydi (404) */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
