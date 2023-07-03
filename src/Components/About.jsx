import React from "react";
import AboutPng from "../assets/aboutImg.png";
import Circle from "../assets/circle.png";

const About = () => {
  return (
    <section className="py-12 w-full relative ">
      <img src={Circle} alt="" className="absolute bottom-0 right-[50%]" />

      <div className="container grid gap-14 lg:grid-cols-2 justify-center items-center">
        <img src={AboutPng} alt="" />
        <article className="flex flex-col gap-8 items-start">
          <div>
            <h2 className="text-[#000] text-2xl font-ultra capitalize">
              about{" "}
            </h2>
            <h1 className="text-yellow-300 text-7xl md:text-9xl font-titanOne">
              donald duck
            </h1>
          </div>

          <div className="flex flex-col gap-8 font-fredokaOne">
            <div className="justify-start items-center gap-5 inline-flex">
              <div className=" text-[#000] text-[16px] font-normal leading-loose">
                Donald Duck is a beloved Disney character known for his
                distinctive voice and comical adventures. His next goal is to
                make himself beloved in the crypto community. Witch $Donald he
                will achieve all his dreams and hit millions of marketcaps!
              </div>
            </div>
          </div>
          <a
            href=""
            className="px-8 py-4 bg-yellow-500 shadow justify-center items-center gap-2.5 inline-flex text-xl capitalize hover:text-black font-titanOne"
          >
            buy now
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
