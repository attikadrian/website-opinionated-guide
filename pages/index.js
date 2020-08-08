import React, { useState } from "react";
import axios from "axios";
import Astronaut from "../components/austronaut";
import Name from "../components/text";
import CheckMark from "../components/checkmark";
import FAQ from "../components/FAQ";
import Footer from "../components/footer";
import Button from "../components/button";
import Chapters from "../components/chapters";
import prices from "../components/data/prices.json";

export async function getServerSideProps({ req }) {
  const ip =
    "95.90.244.126" ||
    req.headers["x-real-ip"] ||
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress;
  let country = {};
  try {
    const { data } = await axios(`http://api.ip2c.info/json/${ip}`);
    const parsed = data.ip2c.Result;
    country = {
      twoLetterCode: parsed.Code2,
      threeLetterCode: parsed.Code3,
      countryName: parsed.Country,
    };

    console.log(parsed);
  } catch (e) {
    console.log(e);
  }
  const userLocation = prices.find(
    (price) => price.countryCode === country.threeLetterCode
  );

  console.log(userLocation);

  if (userLocation) {
    const discount = userLocation.discount - 10;
    return {
      props: {
        discount,
        country,
      },
    };
  }

  return {
    props: {},
  };
}

const openBookCheckout = () => {
  window.Paddle.Checkout.open({ product: 595964 });
};

export default function Index({ discount, country }) {
  const [showBanner] = useState(Boolean(discount));
  return (
    <>
      {showBanner && (
        <div class="relative bg-indigo-600">
          <div class="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div class="pr-16 sm:text-center sm:px-16">
              <p class="font-medium text-white">
                Hey! I noticed you are visiting from {country.countryName} and
                this may be a bit too much money. <br />I support Parity
                Purchasing Power and if you need it you can use the code{" "}
                <span class="text-white font-bold underline">
                  ILOVE{country.countryName.split(" ").join("").toUpperCase()}
                </span>{" "}
                for a {discount}% discount.
              </p>
            </div>
            <div class="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
              <button
                type="button"
                class="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500 transition ease-in-out duration-150"
                aria-label="Dismiss"
              >
                <svg
                  class="h-6 w-6 text-white"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="lol-wrapper">
        <div className="lol">
          <Astronaut />
          <Name />
        </div>
      </div>
      <div class="py-12 bg-gray-900">
        <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
          <div class="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  class="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div class="mt-5">
                <h5 class="text-lg leading-6 font-medium text-white">
                  Competitive exchange rates
                </h5>
                <p class="mt-2 text-base leading-6 text-gray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
              </div>
            </div>
            <div class="mt-10 lg:mt-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  class="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <div class="mt-5">
                <h5 class="text-lg leading-6 font-medium text-white">
                  No hidden fees
                </h5>
                <p class="mt-2 text-base leading-6 text-gray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
              </div>
            </div>
            <div class="mt-10 lg:mt-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  class="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div class="mt-5">
                <h5 class="text-lg leading-6 font-medium text-white">
                  Transfers are instant
                </h5>
                <p class="mt-2 text-base leading-6 text-gray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Chapters />
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Testimonials
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-white">
            Some people read the book and did not mind being on the website as
            marketing!
          </p>
        </div>
        <div className="container px-5 py-24 mx-auto max-w-md mx-auto lg:max-w-5xl lg:grid lg:grid-cols-3 lg:gap-5">
          <div class="py-4 px-8 bg-white shadow-lg rounded-lg my-20">
            <div class="flex justify-center md:justify-end -mt-16">
              <img
                alt="Tomasz Łakomy"
                class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                src="https://pbs.twimg.com/profile_images/1251913970660843520/hyH5ML2H_400x400.jpg"
              />
            </div>
            <div>
              <h2 class="text-gray-800 text-3xl font-semibold">
                Tomasz Łakomy
              </h2>
              <p class="mt-2 text-gray-600">“The fuck did I just read”</p>
            </div>
          </div>
          <div class="py-4 px-8 bg-white shadow-lg rounded-lg my-20">
            <div class="flex justify-center md:justify-end -mt-16">
              <img
                alt="Tomasz Łakomy"
                class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                src="https://pbs.twimg.com/profile_images/1251913970660843520/hyH5ML2H_400x400.jpg"
              />
            </div>
            <div>
              <h2 class="text-gray-800 text-3xl font-semibold">
                Tomasz Łakomy
              </h2>
              <p class="mt-2 text-gray-600">“The fuck did I just read”</p>
            </div>
          </div>
          <div class="py-4 px-8 bg-white shadow-lg rounded-lg my-20">
            <div class="flex justify-center md:justify-end -mt-16">
              <img
                alt="Tomasz Łakomy"
                class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                src="https://pbs.twimg.com/profile_images/1251913970660843520/hyH5ML2H_400x400.jpg"
              />
            </div>
            <div>
              <h2 class="text-gray-800 text-3xl font-semibold">
                Tomasz Łakomy
              </h2>
              <p class="mt-2 text-gray-600">“The fuck did I just read”</p>
            </div>
          </div>
          <div class="py-4 px-8 bg-white shadow-lg rounded-lg my-20">
            <div class="flex justify-center md:justify-end -mt-16">
              <img
                alt="Tomasz Łakomy"
                class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                src="https://pbs.twimg.com/profile_images/1251913970660843520/hyH5ML2H_400x400.jpg"
              />
            </div>
            <div>
              <h2 class="text-gray-800 text-3xl font-semibold">
                Tomasz Łakomy
              </h2>
              <p class="mt-2 text-gray-600">“The fuck did I just read”</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="pt-12 sm:pt-16 lg:pt-24">
          <div className="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto lg:max-w-none">
              <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
                Pricing
              </h2>
              <p className="mt-2 text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
                The right price for you, whoever you are
              </p>
              <p className="mt-2 text-xl leading-7 text-gray-300">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
                sequi unde repudiandae natus.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
          <div className="relative">
            <div className="absolute inset-0 h-3/4 bg-gray-900" />
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-md mx-auto lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5">
                <div className="rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div className="mt-4 flex items-baseline text-6xl leading-none font-extrabold">
                      $30
                    </div>
                    <p className="mt-5 text-lg leading-7 text-gray-500">
                      The book pack
                    </p>
                  </div>
                  <div className="px-6 pt-6 pb-8 bg-gray-50 sm:p-10 sm:pt-6">
                    <ul>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <CheckMark />
                        </div>
                        <p className="ml-3 text-base leading-6 text-gray-700">
                          Book in Light & Dark Versions
                        </p>
                      </li>
                      <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                          <CheckMark />
                        </div>
                        <p className="ml-3 text-base leading-6 text-gray-700">
                          All Code Examples
                        </p>
                      </li>
                      <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                          <CheckMark />
                        </div>
                        <p className="ml-3 text-base leading-6 text-gray-700">
                          Online book version
                        </p>
                      </li>
                    </ul>
                    <Button onClick={openBookCheckout}>
                      Get the book pack
                    </Button>
                  </div>
                </div>
                <div className="mt-4 rounded-lg shadow-lg overflow-hidden lg:mt-0">
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div className="mt-4 flex items-baseline text-6xl leading-none font-extrabold">
                      $60
                    </div>
                    <p className="mt-5 text-lg leading-7 text-gray-500">
                      The super opinionated pack
                    </p>
                  </div>
                  <div className="px-6 pt-6 pb-8 bg-gray-50 sm:p-10 sm:pt-6">
                    <ul>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <CheckMark />
                        </div>
                        <p className="ml-3 text-base leading-6 text-gray-700">
                          Everything in the book pack
                        </p>
                      </li>
                      <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                          <CheckMark />
                        </div>
                        <p className="ml-3 text-base leading-6 text-gray-700">
                          More exercises and code examples
                        </p>
                      </li>
                      <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                          <CheckMark />
                        </div>
                        <p className="ml-3 text-base leading-6 text-gray-700">
                          Video Lessons
                        </p>
                      </li>
                    </ul>
                    <Button>Let me know when this launches</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FAQ />
      </div>
      <Footer />
    </>
  );
}
