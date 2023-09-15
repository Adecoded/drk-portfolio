import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="sm:text-base w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg dark:text-light">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 ">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="items-center flex lg:py-2">
          Build with <span className="text-2xl text-primary px-1">&#9825;</span>{" "}
          <Link
            href="/"
            className="underline underline-offset-2"
          >
            Drey_Kin
          </Link>
        </div>

        <Link
          href="/"
          className="underline underline-offset-2"
        >
          {" "}
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
