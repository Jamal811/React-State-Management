import React from "react";
import Navbar from "../layout/Navbar";
import SideBar from "../layout/SideBar";
import Products from "../products/Products";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="has-background-light">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-3">
                <div className="box">
                  <SideBar />
                </div>
              </div>
              <div className="column is-9">
                <Products />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
