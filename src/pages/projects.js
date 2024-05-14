import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Project1 from "../../public/images/projects/project deliveroo.webp";
import Project2 from "../../public/images/projects/whatsapp image.png";
import Project3 from "../../public/images/projects/pinterest.webp";
import Project4 from "../../public/images/projects/disney.png";
import Project5 from "../../public/images/projects/pronef.webp";
import Project6 from "../../public/images/projects/cointracker.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);
const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className=" w-full flex items-center
     justify-between rounded-3xl
      bg-primaryDark dark:bg-primaryDark
       shadow-2xl p-12 relative border-r-8 border-b-8
       lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-4xl xs:p-4
       "
    >
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt="title"
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          priority
          sizes="(max-width:768px) 100vw,
          (max-with: 1200px) 50vw,
          50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left  text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-start sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link className="w-10" href={github} target="_blank">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6  text-lg font-semibold
            sm:px-4 sm:text-base
            "
            target="_blank"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, img, link, github, type }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl shadow-2xl 
         bg-light p-6 relative border-r-8 border-b-8
         xs:p-4
        "
    >
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt="title"
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full  text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            className="rounded-lg bg-dark text-light p-2 px-6  text-lg font-semibold md:text-base"
            target="_blank"
          >
            Visit
          </Link>
          <Link className="w-10 md:w-8" href={github} target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>DreyKin | Project Page</title>
        <meta name="description" content="description" />
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-16 flex-col items-center justify-center">
        <Layout className="pt-16 ">
          <AnimatedText
            className="mb-16 lg:text-7xl sm:mb-8 sm:text-6xl xs:text-4xl"
            text="Imagination Trumps Knowledge!"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12 ">
              <FeaturedProjects
                title="Deliveroo Application Clone"
                summary="A feature-rich Deliveroo App using React-Native, Expo cli, Tailwind CSS, React-Native Map, Sanity and Redux Toolkit.
                It is food delivery app that delievers food from the best-rated local partners straight to your door.
                "
                link="https://github.com/Adecoded/Deliveroo"
                type="Featured Project"
                img={Project1}
                github="https://github.com/Adecoded/Deliveroo"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Disney web Application clone"
                link="https://github.com/Adecoded/disney-plus"
                type="Project"
                img={Project4}
                github="https://github.com/Adecoded/disney-plus"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="WhatsApp Application clone"
                link="https://github.com/Adecoded/whatapp"
                type="Project"
                img={Project2}
                github="https://github.com/Adecoded/whatapp"
              />
            </div>

            <div className="col-span-12 ">
              <FeaturedProjects
                title="CoinTracker Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
            local currency."
                link="https://github.com/Adecoded/CoinTracker"
                type="Featured Project"
                img={Project6}
                github="https://github.com/Adecoded/CoinTracker"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Pronef NFT Application"
                link="https://github.com/Adecoded/pROnEFNftApp"
                type="Project"
                img={Project5}
                github="https://github.com/Adecoded/pROnEFNftApp"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Pinterest Application clone"
                link="https://github.com/Adecoded/pinterest"
                type="Project"
                img={Project3}
                github="https://github.com/Adecoded/pinterest"
              />
            </div>
          </div>
              <div className="col-span-12 ">
              <FeaturedProjects
                title="My Portfolio Application"
                summary="A porfolio website showing little details about me and what i have done with my previous learning experience."
                type="Featured Project"
                img={Project6}
                link="https://drk-portfolio.netlify.app/"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Pronef NFT Application"
                link="https://github.com/Adecoded/pROnEFNftApp"
                type="Project"
                img={Project5}
                github="https://github.com/Adecoded/pROnEFNftApp"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Pinterest Application clone"
                link="https://github.com/Adecoded/pinterest"
                type="Project"
                img={Project3}
                github="https://github.com/Adecoded/pinterest"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
