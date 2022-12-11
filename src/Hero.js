import "flowbite";
import "flowbite-react";
import logo from './static/image.png';
import logo_oo from './static/logo_image.png';
import Typed from "react-typed";
const Hero = () => {
  return (
    <>
      <section class="text-gray-600 body-font dark:text-gray-400 dark:bg-gray-900">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-50">
            KIET Koders Korner &lt; &gt; Creating Competitive Coding Culture at Campus" [K3=C5]
            </h1>
            <p class="mb-8 leading-relaxed">
              Vision-

              To make KIET Group of Institutions well known globally by achieving great heights among <br />various technical competitive platforms and outperforming in various<br/> international and national events."<br/>

              Mission-<br/>

              1. Make it to the ACM ICPC Finale "Olympics of Programming Competitions"<br/>

              2. To qualify and acquire various top-notch packages through hiring hackathons like Code <br/>Agon, Google CodeJam, etc.<br/>

              3. To upscale the ranking of KIET nationally and internationally on various coding <br/>platforms.<br/>
            </p>
            <Typed
                className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-black dark:text-white grow"
                strings={[
                  "Competitive Programming ",
                 "Yash Varshney",
                 "Kushagra Varshney"
                ]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            {/* <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div> */}
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <picture>
              <source class="object-cover object-center rounded" srcSet={logo_oo} media="(d)" />
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={logo}
              />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
