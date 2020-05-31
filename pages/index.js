import React from "react";
import axios from "axios";
import Astronaut from "../components/austronaut";
import Name from "../components/text";
import CheckMark from "../components/checkmark";
import FAQ from "../components/FAQ";
import Footer from "../components/footer";
import Button from "../components/button";

export async function getServerSideProps({ req }) {
  const ip = req.headers["x-real-ip"] || req.connection.remoteAddress;
  try {
    const { data } = await axios(`http://ip2c.org/${ip}`);
    const parsed = data.split("1;")[1].split(";");

    return {
      props: {
        location: {
          twoLetterCode: parsed[0],
          threeLetterCode: parsed[1],
          countryName: parsed[2],
        },
      },
    };
  } catch (e) {
    return {
      props: {
        location: {
          twoLetterCode: "DE",
          threeLetterCode: "DEU",
          countryName: "Germany",
        },
      },
    };
  }
}

export default function Index({ location }) {
  console.log(location);
  return (
    <>
      <div className="lol-wrapper">
        <div className="lol">
          <Astronaut />
          <Name />
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
                      $40
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
                    <Button>Get the book pack</Button>
                  </div>
                </div>
                <div className="mt-4 rounded-lg shadow-lg overflow-hidden lg:mt-0">
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div className="mt-4 flex items-baseline text-6xl leading-none font-extrabold">
                      $80
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
                          More excercises and code examples
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
                    <Button>Get the super opinionated pack</Button>
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
