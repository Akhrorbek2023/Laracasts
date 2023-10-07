import React from "react";
import FooterEnding from "./FooterEnding";
import Form from "./Form";
import Hero from "./Hero";

const Footer = () => {
  return (
    <div
      className="w-[100wh] h-[100vh] bg-cover bg-opacity-80"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1634912314611-768095c24419?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)`,
      }}
    >
      <div className="w-[100wh] h-[100vh] bg-blue-900 bg-opacity-90">
        <div className="container">
            <div className="w-[800px] mx-auto py-[50px]">
                <h1 className="font-[600] text-[37px] text-white text-center">Want us to mail you occasionally with Laracast news?</h1>
            </div>
            <Form/>
            <Hero/>
            <div className="w-[100%] h-[1px] bg-blue-gray-200 mb-4"></div>
            <FooterEnding/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
