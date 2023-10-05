import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./togglecomponents/Home";
import FreeTools from "./togglecomponents/FreeTools";
import SeoGroupPlan from "./togglecomponents/SeoGroupPlan";
import SocialPanel from "./togglecomponents/SocialPanel";
import BuyAndSell from "./togglecomponents/BuyAndSell";
import Earning from "./togglecomponents/Earning";
import Community from "./togglecomponents/Community";
import Blogs from "./togglecomponents/Blogs";
import PlanAndPricing from "./togglecomponents/PlanAndPricing";

const Main = () => {
  return (
    <>
      <section className="section-one home">
        <div className="container home-container">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
            </Routes>
            <Routes>
              <Route path="/freetools" element={<FreeTools />}></Route>
            </Routes>
            <Routes>
              <Route path="/seogroupplan" element={<SeoGroupPlan />}></Route>
            </Routes>
            <Routes>
              <Route path="/socialpanel" element={<SocialPanel />}></Route>
            </Routes>
            <Routes>
              <Route path="/buyandsell" element={<BuyAndSell />}></Route>
            </Routes>
            <Routes>
              <Route path="/earning" element={<Earning />}></Route>
            </Routes>
            <Routes>
              <Route path="/blogs" element={<Blogs />}></Route>
            </Routes>
            <Routes>
              <Route path="/community" element={<Community />}></Route>
            </Routes>
            <Routes>
              <Route
                path="/planandpricing"
                element={<PlanAndPricing />}
              ></Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </section>
    </>
  );
};

export default Main;
