import React from "react";
import Token from "../assets/token.png";
import { FiCopy } from "react-icons/fi";

const Mics = () => {
  return (
    <section className="py-12 w-full relative">
      <div className="container grid gap-14 justify-center items-center mt-14">
        <article className="flex flex-col ">
          <h3 className="text-yellow-300 text-4xl font-timmana">
            TOKEN SUPPLY: 8,042,000,000
          </h3>

          <div className="flex flex-col mt-10 gap-8 font-fredokaOne">
            <div className="flex flex-col gap-5">
              <div className="w-full h-8 justify-between items-start inline-flex">
                <div className="text-[#000] text-[24px] font-normal leading-loose">
                  Supply
                </div>
                <div className="text-zinc-900 text-[24px] font-normal leading-loose">
                  8042000000
                </div>
              </div>
              <div className="w-full h-5  bg-red-100 rounded-full justify-start items-center inline-flex">
                <div className="w-11/12 h-5 relative bg-amber-300 rounded-full" />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full h-8 justify-between items-start inline-flex">
                <div className="text-[#000] text-[24px] font-normal leading-loose">
                  CA
                </div>
                <div
                  className="text-zinc-600 text-[24px] flex items-center gap-4 font-normal leading-loose"
                  onClick={() => {
                    navigator.clipboard
                      .writeText("000")
                      .then(() => {
                        alert("Contract Copied");
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                >
                  <FiCopy /> 0xe..............
                </div>
              </div>
              <div className="w-full h-5  bg-red-100 rounded-full justify-start items-center inline-flex">
                <div className="w-4/12 h-5 relative bg-blue-400 rounded-full" />
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Mics;
