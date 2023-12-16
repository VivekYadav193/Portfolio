import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile-pic.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>{"<CodeBlooded/>"}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Vy"
                className="w-[400px] h-[400px] mx-auto  my-auto md:w-[200px] md:h-[200px] md:mx-auto"
                priority
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Learning MERN Curious Explorer of Web Trends 3rd-year B.Tech Student"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                👋 Hi there! I'm Vivek Yadav, B.Tech student from
                <span className="font-semibold text-red-500 "> IN</span>
                <span className="font-semibold text-white  ">DI</span>
                <span className="font-semibold text-green-500  ">A . </span>
                <br />
                🌐 As a tech enthusiast, I thrive on creating innovative and
                user-friendly web solutions. My skill set includes
                <span className="font-semibold text-primary">
                  {" "}
                  HTML, CSS, JavaScript, and ReactJS, NodeJs ,ExpressJs and
                  Mongo Db{" "}
                </span>
                which I employ to craft engaging and dynamic user interfaces.
                I'm constantly exploring new trends and best practices in the
                ever-evolving world of web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                  hover:bg-light hover:text-dark border-2 border-solid border-transparent 
                  hover:border-dark transition duration-300 ease-in-out
                  dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light
                  md:p-2 md:px-4 md:text-base
                "
                  download={true}
                >
                  Resume
                  <LinkArrow className={"!w-5 ml-1"} />
                </Link>
                <Link
                  href="mailto:vivekash03@gmail.com"
                  target={"_blank"}
                  className="
                ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base
                "
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="vy" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
