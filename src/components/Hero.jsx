import React from "react";

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-2">
      <p className="text-blue-600 text-sm sm:text-[15px] font-medium mb-3 sm:mb-4">
        Job Board Feed
      </p>

      <h1 className="
        text-5xl
        sm:text-5xl
        lg:text-6xl
        font-bold
        tracking-tight
        text-slate-950
        leading-none
        max-w-4xl
      ">
        Find your next role.
      </h1>

      <p className="
        mt-4 sm:mt-6
        max-w-2xl
        text-sm sm:text-base
        leading-7
        text-slate-500
      ">
        Discover hand-picked opportunities from top companies.
Search, filter, and bookmark jobs that match your goals.
      </p>
    </section>
  );
};

export default Hero;