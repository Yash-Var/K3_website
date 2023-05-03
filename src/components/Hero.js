import "flowbite";
import "flowbite-react";

import Typed from "react-typed";
import { useState } from "react";
import Image_logo from "../static/koderscorner.png";
import Lottie from "lottie-react";
import yash from "./91199-quiz(1).json";
const Hero = () => {
  return (
    <div className="p-5">
      <section
        class="text-gray-600  body-font dark:text-gray-400 dark:bg-gray-900"
        id="home"
      >
        <div class="container mx-auto flex md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mt-10 rounded-2xl p-7  border-gray-900">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-50 slide-top">
              Creating Competitive Coding Culture at Campus
            </h1>
            <p class="mb-8 leading-relaxed">
              Vision- To make KIET Group of Institutions well known globally by
              achieving great heights among <br />
              various technical competitive platforms and outperforming in
              various
              <br /> international and national events."
              <br />
              Mission-
              <br />
              1. Make it to the ACM ICPC Finale "Olympics of Programming
              Competitions"
              <br />
              2. To qualify and acquire various top-notch packages through
              hiring hackathons like Code <br />
              Agon, Google CodeJam, etc.
              <br />
              3. To upscale the ranking of KIET nationally and internationally
              on various coding <br />
              platforms.
              <br />
            </p>
            <Typed
              className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-red-600 dark:text-red-600 grow"
              strings={[
                "Competitive Programming ",
                "Yash Varshney",
                "Kushagra Varshney",
              ]}
              typeSpeed={120}
              backSpeed={120}
              loop
            />
          </div>

          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-full h-full gif">
            <Lottie loop={true} animationData={yash} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
