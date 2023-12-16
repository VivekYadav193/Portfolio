import React, { useRef, useEffect } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import vivek from "../../public/images/profile/vy.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";

import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref} />;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Vivek | About</title>
        <meta name="description" content="About Page" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="<Coding the Future/>"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 ">
                About Me
              </h2>
              <p className="font-medium">
                👋 Hello, I am Vivek Yadav! I am a B.Tech student, currently
                navigating my way through the exciting realms of web development
                and data science. As a third-year student, I am honing my skills
                and exploring the endless possibilities that technology offers.
                <span className="font-semibold text-primary">
                  {" "}
                  🌐 Tech Enthusiast at Heart My passion lies in crafting
                  innovative and user-friendly web solutions. Armed with a
                  toolkit that includes HTML, CSS, JavaScript, ReactJS, Node.js,
                  Express.js, and MongoDB.{" "}
                </span>
                🚀Continuous Learning Journey In the ever-evolving world of web
                development, I am always on the lookout for new trends and best
                practices. Whether it is mastering the intricacies of ReactJS or
                diving into the world of data with Node.js and MongoDB.
              </p>
            </div>
            <div
              className="col-span-3  relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark  dark:border-light xl:col-span-4 md:order-1
            md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={vivek}
                alt="vivek-profile"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={5} />+
                </span>

                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects
                </h2>
              </div>
            </div>
          </div>
          <Skills />

          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
