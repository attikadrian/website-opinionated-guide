import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import axios from "axios";
import Astronaut from "../components/austronaut";
import Name from "../components/text";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Chapters from "../components/chapters";
import Banner from "../components/banner";
import prices from "../components/data/prices.json";
import Buy from "../components/buy";
import Features from "../components/features";

export async function getServerSideProps({ req }) {
  const ip =
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

export default function Index({ discount, country }) {
  const [showBanner] = useState(Boolean(discount));

  return (
    <>
      <Banner show={showBanner} country={country} discount={discount} />
      <div className="hero-wrapper">
        <div className="hero">
          <Parallax y={[-20, 20]} tagOuter="figure">
            <Astronaut />
          </Parallax>
          <Parallax y={[-60, 20]} tagOuter="figure">
            <Name />
          </Parallax>
        </div>
      </div>
      <Features />
      <Chapters />
      <Testimonials />
      <Buy />
      <Footer />
    </>
  );
}
