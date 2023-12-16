import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/ecom2.png";
import project2 from "../../public/images/projects/w_app.png";
import project5 from "../../public/images/projects/pswdgen.png";
import project4 from "../../public/images/projects/rzp.png";
import project3 from "../../public/images/projects/tictactoe.png";
import project6 from "../../public/images/projects/todo.png";

import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-3xl rounded-br-2xl border
    border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
      rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-lg xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 "
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
            sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github, summary }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border
    border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
    md:-right-2 md-w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
      rounded-br-3xl dark:bg-light"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
        {summary}
      </p>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
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
        <title>Vivek | Projects Page</title>
        <meta name="description" content="Projects Page" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout classname="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="E-Commerce App"
                img={project1}
                summary="An E-Commerce Web App built with React, Redux,Express ,Mongo Db ,Stripe . This project is a fully functional e-commerce web app with Stripe integration that allows users to sign up, sign in, add items to their cart, and checkout using Stripe. The app also has a fully functional admin panel that allows admins to add, edit, and delete products from the store."
                link="https://e-cart-backend-qygp.onrender.com/"
                github="https://github.com/VivekYadav193/Ecommerce-Web-App"
                type="MongoDB || Express || React || NodeJs || Redux || Stripe"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Weather App"
                img={project2}
                summary="A Weather App built with HTML CSS JS and OpenWeatherMap API. The app displays the current weather and a 5-day forecast for any city in the world."
                link="https://vivekyadav193.github.io/Weather-App/"
                github="https://github.com/VivekYadav193/Weather-App"
                type="HTML || CSS || JS"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Tic Tac Toe Game"
                img={project3}
                summary="A Tic Tac Toe Game built with HTML CSS and JS. The game allows two players to play against each other. "
                link="https://vivekyadav193.github.io/Tic-Tac-Toe/"
                github="https://github.com/VivekYadav193/Tic-Tac-Toe"
                type="HTML || CSS || JS"
              />
            </div>

            <div className="col-span-12">
              {" "}
              <FeaturedProject
                title="Razorpay Home-Page Clone"
                img={project4}
                summary=" A clone of the Razorpay Home Page built with HTML and Tailwind CSS. The project is fully responsive."
                link="https://clone-razorpay-vy.netlify.app/"
                github="https://github.com/VivekYadav193/Razorpay-Clone"
                type="HTML || Tailwind CSS"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Password Generator"
                img={project5}
                summary="A Password Generator built with HTML CSS and JS. The app generates a random password based on the user's input. "
                link="https://vivekyadav193.github.io/Password-Generator/"
                github="https://github.com/VivekYadav193/Password-Generator"
                type="HTML || CSS || JS"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Todo App"
                img={project6}
                summary=" A Todo App built with React and Redux. The app allows users to add and delete todos."
                link="https://todo-app-six-beryl.vercel.app/"
                github="https://github.com/VivekYadav193/todo-app"
                type="React || Redux (Pending)"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
