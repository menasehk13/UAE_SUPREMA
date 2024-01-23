import React from "react";
import Layout from "../components/Layout/Layout";
import img from "../assets/images/underconstraction.png";
const UnderConstruction = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <img src={img} className="w-[900px] h-[900px]" />
        <h1>The site is Under-Construction</h1>
      </div>
    </Layout>
  );
};

export default UnderConstruction;
