import Head from "next/head"
import { BsFillMoonStarsFill } from "react-icons/bs"
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai"
import Image from "next/Image"
import deved from "../public/dev-ed-wave.png"
import design from "../public/design.png"
import code from "../public/code.png"
import consulting from "../public/consulting.png"
import web1 from "../public/web01.png"
import web2 from "../public/web02.png"
import web3 from "../public/web03.png"
import web4 from "../public/web04.png"
import web5 from "../public/web05.png"
import web6 from "../public/web06.png"
import { useState } from "react"
import Link from "next/link"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Roshan Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        {/* section with navbar */}
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">
              DevelopbyRoshan
            </h1>
            <ul className="flex items-center">
              <li className="list-none">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1O-Qtqdoo78x73hYMrL8_7dNIXXzAXaku/edit?usp=sharing&ouid=113995107266914876097&rtpof=true&sd=true"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/* Your Intro */}
          <div className="text-center p-10">
            <h2 className="text-5xl text-teal-600 font-medium md:text-6xl">
              Roshan
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Frontend Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 font-semibold md:text-xl max-w-xl mx-auto dark:text-white">
              Freelancing providing services for programming needs. Join me
              let's turn your ideas into reality.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3">
            {/* <AiFillTwiiterCircle /> */}
            <Link
              legacyBehavior
              href={"https://www.instagram.com/roshan_i_can/"}
            >
              <a>
                <AiFillInstagram className="dark:text-white" />
              </a>
            </Link>
            {/* Linkdln */}
            <Link
              legacyBehavior
              href={"https://www.linkedin.com/in/roshan-ican/"}
            >
              <a>
                <AiFillLinkedin className="dark:text-white" />
              </a>
            </Link>
            {/* twitter */}
            <Link legacyBehavior href={"https://twitter.com/IamMuha51906610"}>
              <a>
                <AiFillTwitterCircle className="dark:text-white" />
              </a>
            </Link>
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" alt="profile" />
          </div>
        </section>
        {/* section 2 */}
            
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beginning of my journey as a freelancer developer, I've
              done remote work for various startups, mostly with MERN Stack.
              <br />
              <span className="text-teal-500"> Agencies </span>
              consulted for <span className="text-teal-500"> startups </span>
              and collaborated with talented people to create digital products
              E-commerce, Blockchain and Admin applications for both business
              and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              I offer a wide range of services from web development to digital
              marketing, consultation
            </p>
          </div>
          <div className="lg:flex gap-10">
            {/* card  1*/}
            <div className="flex flex-col text-center shadow-lg p-10 rounded-xl my-10 justify-center items-center mx-auto">
              <Image
                src={design}
                width={100}
                height={100}
                className="justify-center"
                alt="designIcon"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Beautiful Designs
              </h3>
              <p className="font-medium dark:text-white">
                Design that suits for your needs
              </p>
              <h4 className="py-4 font-bold text-teal-600">
                Technologies that I use
              </h4>
              <p className="text-gray-800 py-1 uppercase dark:text-white">
                Figma
              </p>
              <p className="text-gray-800 py-1 uppercase dark:text-white">
                Photoshop CC and Coral Draw
              </p>
              <p className="text-gray-800 py-1 uppercase dark:text-white">
                Illustrator
              </p>
            </div>
            {/* card 2 */}
            <div className=" flex flex-col text-center shadow-lg p-10 rounded-xl my-10 justify-center items-center mx-auto">
              <Image
                src={code}
                width={100}
                height={100}
                className="justify-center"
                alt="codeIcon"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Fast and Responsive Website
              </h3>
              <p className="font-medium dark:text-white">
                Creating elegant websites suited for your needs
              </p>
              <h4 className="py-4 text-teal-600 font-bold">
                Technologies that I use
              </h4>
              <p className="text-gray-800 py-1 uppercase dark:text-white">
                Javascript, React JS, Next Js
              </p>
              <p className="text-gray-800 py-1 uppercase dark:text-white">
                HTML, CSS, BOOTSTRAP, TAILWINDCSS
              </p>
              <p className="text-gray-800 py-1 uppercase dark:text-white">
                Node Js, Django, Express Js, Firebase
              </p>
            </div>
            {/*card 3 */}
            <div className=" flex flex-col text-center shadow-lg p-10 rounded-xl my-10 justify-center items-center mx-auto">
              <Image
                src={consulting}
                width={100}
                height={100}
                className="justify-center"
                alt="designIcon"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Consulting that helps you grow
              </h3>
              <p className="font-medium dark:text-white">
                Experience based advices
              </p>
              {/* <h4 className="py-4 text-teal-600 font-bold">Technologies that I use</h4>
              <p className="text-gray-800 py-1 uppercase dark:text-white">
                Javascript, React JS, Next Js
              </p>
              <p className="text-gray-800 py-1 uppercase dark:text-white">
                HTML, CSS, BOOTSTRAP, TAILWINDCSS
              </p>
              <p className="text-gray-800 py-1 uppercase dark:text-white">
                Node Js, Django, Express Js, Firebase
              </p> */}
            </div>
          </div>
        </section>
        {/* dark mode */}
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beginning of my journey as a freelancer developer, I've
              done remote work for various startups, mostly with MERN Stack.
              <span className="text-teal-500">
                <br />
                Agencies{" "}
              </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talented people to create digital products
              Mostly E-commerce, Blockchain and Admin applications for both
              business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              I offer a wide range of services from web development to digital
              marketing, consultation
            </p>
          </div>
          {/* projects section */}
          <div className="flex flex-col py-15 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 p-4">
              <Link href={"https://amazona-gamma.vercel.app/"} legacyBehavior>
                <a>
                  <Image
                    src={web1}
                    className="rounded-lg object-cover w-full h-full"
                    layout="responsive"
                    alt="Amazona"
                  />
                </a>
              </Link>
            </div>
            <div className="basis-1/3 flex-1 p-4">
              <Link
                href={"https://roshan-ican.github.io/SpaceX/"}
                legacyBehavior
              >
                <a>
                  <Image
                    src={web2}
                    className="rounded-lg object-cover w-full h-full"
                    layout="responsive"
                    alt="Space-x"
                  />
                </a>
              </Link>
            </div>
            <div className="basis-1/3 flex-1 p-4">
              <Link
                href={
                  "https://roshan-ican.github.io/BootStrap-Bootcamp-website.github.io"
                }
                legacyBehavior
              >
                <a>
                  <Image
                    src={web3}
                    className="rounded-lg object-cover w-full h-full"
                    layout="responsive"
                    alt="BootCamp website"
                  />
                </a>
              </Link>
            </div>
            <div className="basis-1/3 flex-1 p-4">
              <Link legacyBehavior href={"https://flickoot.netlify.app/"}>
                <a>
                  <Image
                    src={web4}
                    className="rounded-lg object-cover w-full h-full"
                    layout="responsive"
                    alt="AOT platform"
                  />
                </a>
              </Link>
            </div>
            <div className="basis-1/3 flex-1 p-4">
              <Link href={"#"} legacyBehavior>
                <a>
                  <Image
                    src={web5}
                    className="rounded-lg object-cover w-full h-full"
                    layout="responsive"
                    alt="Blockchain"
                  />
                </a>
              </Link>
            </div>
            <div className="basis-1/3 flex-1 p-4">
              <Link
                href={"https://roshan-ican.github.io/webapp.github.io/"}
                legacyBehavior
              >
                <a>
                  <Image
                    src={web6}
                    className="rounded-lg object-cover w-full h-full"
                    layout="responsive"
                    alt="Marketing-agency"
                  />
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}