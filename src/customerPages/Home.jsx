import React from "react";
import Header from "../include/Header";
import call from "../assets/customer/call-icon.png";
import welcome from "../assets/customer/welcome.png";
import returnIcon from "../assets/customer/return-icon.jpg";
import support from "../assets/customer/support-icon.jpg";
import secure from "../assets/customer/secure-pay-icon.jpg";
import delivery from "../assets/customer/free-delivery-icon.jpg";

function Home() {
  return (
    <div>
      <div className="flex justify-center items-center h-[100vh] bg-[url('../assets/customer/hero.jpg')] bg-cover">
        <div className="flex flex-col justify-center items-center space-y-4">
          <h4 className="text-8xl font-bold">VEGSHELL</h4>
          <h6 className="text-xl">Agriculture with Difference</h6>
        </div>
      </div>

      <div className="grid grid-cols-2 m-10">
        <div className="">
          <img src={welcome} alt="welcome" className="pl-md-32 px-4 py-8" />
          <div className="m-4">
            <div className="bg-green-400 h-[120px] w-[480px] mx-auto rounded-md">
              <div className="grid grid-cols-7">
                <div className="p-2">
                  <img src={call} alt="call" className="mx-4 py-6" />
                </div>
                <div className="p-2 col-span-6">
                  <h1 className="cursor-pointer font-semibold text-4xl text-white p-6 mx-4">
                    <a href="tel:+919113624552" class="text-4xl">
                      +91 9113624552
                    </a>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-32 py-32 col-span-1">
          <div>
            <h3 className="text-2xl font-bold">Welcome To</h3>
            <h2 className="text-6xl font-bold text-green-600">VEGSHELL</h2>

            <p className="text-gray-500 py-8">
              We are a team of dedicated professionals who are passionate about
              promoting and advancing the agriculture industry. Our goal is to
              connect farmers and producers with consumers by facilitating the
              marketing and distribution of high-quality agricultural products.
            </p>
          </div>
          <div className="mt-16 shadow-xl border border-gray-200">
            <div className="grid grid-cols-2 p-10">
              <div className="mx-auto text-center">
                <img src={delivery} alt="delivery" className="mx-auto" />
                <h5 className="font-semibold">Free-Delivery</h5>
                <p className="text-gray-400">For all order over Rs. 100​</p>
              </div>
              <div className="mx-auto">
                <div className="mx-auto text-center">
                  <img src={support} alt="support" className="mx-auto" />
                  <h5 className="font-semibold">24/7 Suport</h5>
                  <p className="text-gray-400">Dedicated Support​</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 p-10">
              <div className="mx-auto text-center">
                <img src={secure} alt="delivery" className="mx-auto" />
                <h5 className="font-semibold">Secure Payment</h5>
                <p className="text-gray-400">100% Secure Payment​</p>
              </div>
              <div className="mx-auto">
                <div className="mx-auto text-center">
                  <img src={returnIcon} alt="support" className="mx-auto" />
                  <h5 className="font-semibold">Fresh</h5>
                  <p className="text-gray-400">100% pure natural products​</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
