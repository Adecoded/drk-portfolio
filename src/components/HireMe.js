import React from "react";
import { JobIcon } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute xs:left:20">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <JobIcon className={"fill-dark dark:fill-light animate-spin-slow"} />

        <Link
          href="mailto:adebisidrey@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 
           -translate-x-1/2 -translate-y-1/2 
            bg-dark text-light shadow-md border border-solid
             border-dark w-20 h-20 rounded-full   animate-spin-slow
             font-semibold
             hover:bg-light
             hover:text-dark
             dark:bg-light
             dark:text-dark
             dark:border-light
             dark:hover:bg-dark
             dark:hover:text-light
             md:w-11 md:h-11 md:text-[10px]
             "
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
