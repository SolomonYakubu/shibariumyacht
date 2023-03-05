import type { NextPage } from "next";
import { useEffect, useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

import Header from "../components/Header";

import { Zoom, Bounce, Fade, Roll } from "react-reveal";
import ai from "../public/images/ai.webp";
import about2 from "../public/images/about.webp";
import why from "../public/images/why.webp";
import logo from "../public/images/logo.webp";
import logo2 from "../public/images/logo.webp";
// import Shibarium Yacht Club from "../public/images/Shibarium Yacht Club.jpg";
import { Link, animateScroll as scroll } from "react-scroll";

import p1 from "../public/images/p1.png";
import p3 from "../public/images/p3.png";
import p4 from "../public/images/p4.png";
import p5 from "../public/images/p5.png";
import p6 from "../public/images/p6.png";
import p7 from "../public/images/p7.png";
import p8 from "../public/images/p8.png";
import p10 from "../public/images/p10.png";
import buyimg from "../public/images/buy.png";
import tokenimg from "../public/images/token.png";
import work from "../public/images/work.svg";
import create from "../public/images/create.svg";
import web3 from "../public/images/web3.svg";
import business from "../public/images/business.svg";
import content from "../public/images/content.svg";
import other from "../public/images/other.svg";
import { BsTelegram, BsTwitter, BsMedium } from "react-icons/bs";
import { BiBot } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRobot, FaTelegramPlane, FaCopy, FaChartBar } from "react-icons/fa";
import { RiExchangeLine } from "react-icons/ri";
import { BsArrowReturnRight } from "react-icons/bs";
import "react-vertical-timeline-component/style.min.css";

const Home: NextPage = () => {
  const router = useRouter();

  const list = [
    ["Home", null],

    ["About", null],
    ["Partners", null],
    ["Tokenomics", null],
    ["Roadmap", null],
    ["Buy Now", "https://app.uniswap.org"],
  ];
  const roadmap = [
    {
      title: "Phase 1",
      desc: [
        "Website design ",
        "Game development",
        "Media Marketing",
        "Dextools Trending  ",
      ],
    },
    {
      title: "PHASE 2",

      desc: [
        "Contract creation ",
        "Launch on ETH",
        "CG and CMC applications ",
        "Community building ",
        "Swap Dapp release",
      ],
    },
    {
      title: "PHASE 3",

      desc: [
        "Facebook and TikTok ads",
        "NFT preview ",

        "Partnerships ",
        "Aggressive marketing ",
        "Staking Dapp release",
      ],
    },
  ];
  const moreFeatures = [
    {
      title: "Web3 with us",
      icon: web3,
    },
    {
      title: "Bring your business to us",
      icon: business,
    },
    {
      title: "Become a validator",
      icon: other,
    },
    {
      title: "Work with us",
      icon: work,
    },
    {
      title: "Create content with us",
      icon: content,
    },
    {
      title: "Create stuff with us",
      icon: create,
    },
  ];

  const tokenomics = [
    { option: "Name", value: "Shibarium Yacht Club" },
    { option: "Symbol", value: "$Shibarium Yacht Club" },
    { option: "Chain", value: "Ethereum" },
    { option: "Initial Supply", value: "1 Trillion" },

    { option: "Two Pools", value: "ETH & USDC" },
    {
      option: "Contract Address",
      value: "0x6d125ECC7B11E89708C13B1861e92446C8C8c9FA",
    },
  ];
  const reward = [
    {
      title: "Name - Shibarium Yacht Club",
      desc: "The tax charged for both buy and sell transactions is 5%",
    },
    {
      title: "Symbol - $SHIBYACHT",
      desc: "The tax charged for both buy and sell transactions is 5%",
    },
    {
      title: "Tax - 5/5",

      desc: "1% fees is used to ensure that there are funds to support trading activity.",
    },
    {
      title: "Supply - 1 Billion",

      desc: "4% fees directly goes to marketing to support the token in a long run.",
    },
  ];
  const buy = [
    {
      title: "1",

      desc: "Download & setup MetaMask or TrustWallet",
    },
    {
      title: "2",

      desc: "Buy & send ETH to Metamask or Trust wallet",
    },
    {
      title: "3",

      desc: "Head over to Uniswap to buy your $Shibarium Yacht Club",
    },
    {
      title: "4",

      desc: "View Shibarium Yacht Club in your wallet and lastly HODL",
    },
  ];
  const about = [
    "The cryptocurrency project has excellent tokenomics, including the use of ETH pools to provide liquidity and stability in the market.",
    "The project has a well-defined roadmap that outlines its development plans and milestones, providing investors with confidence in the team's ability to deliver on its promises.",
    "The project has a reward system for token holders, which incentivizes investors to hold onto their tokens for longer periods, contributing to the long-term stability and success of the project.",

    "The development team has plans for a complete ecosystem that will offer a range of exciting new features and benefits to investors, including new tools, services, and platforms that will be integrated with the existing infrastructure, further enhancing the value of the project. ",
  ];
  return (
    <div>
      <Header />
      <Layout>
        {/* <Header /> */}
        <section
          className=" md:h-[calc(100vh)]  mb-0 pb-0 w-full bg-gradient-to-r from-bg2 to-bg1  md:py-0 bg-cover bg-left md:bg-top md:bg-fixed relative"
          id="Home"
          // style={{ backgroundImage: "url('images/background.gif')" }}
        >
          {/* <ParticlesBg /> */}
          <div className="h-full flex relative flex-col overflow-y-hidden items-center justify-center md:justify-around md:flex-row-reverse   md:gap-2 md:items-center  w-full md:px-24 md:pt-8 md:pb-0 pt-20 pb-20 ">
            <div className="w-full md:w-1/2 md:block z-20 drop-shadow-2xl">
              <ExportedImage
                src={ai}
                alt="illustration"
                layout="responsive"
                className=" "
              />
            </div>
            <div className="w-full md:w-3/5 block  absolute opacity-20 z-10 ">
              <ExportedImage
                src={logo2}
                alt="illustration"
                layout="responsive"
                className=" shadow-2xl shadow-bg1"
              />
            </div>

            <div className="md:flex flex-col justify-center  items-center md:items-start md:pt-0  px-6 md:p-3 w-full">
              <Bounce top>
                <h3 className=" font-extrabold text-6xl md:text-7xl  text-white my-1  font-[Cinzel] md:text-left z-30">
                  Shibarium
                  <br /> Yacht
                  <br /> Club
                </h3>
                <p className="text-gray-200 md:text-xl  text-sm   font-[Figtree]  md:text-start">
                  In a world that is constantly evolving, it&apos;s essential
                  that we embrace new technologies that can help us transform
                  the way we conduct business and make the world a better place.
                  Our cutting-edge technology offers low-cost, high-speed, and
                  robust solutions that have the power to revolutionize the way
                  we live and work.
                </p>

                <div className="flex  items-start md:w-3/6 gap-2 md:mb-0 my-3 md:my-0 md:mt-6">
                  <button
                    onClick={() =>
                      (window.location.href = "https://uniswap.org")
                    }
                    className="flex items-center justify-between gap-3 font-[Figtree]  hover:bg-gradient-to-tr hover:bg-primary bg-primary  text-white p-2 md:p-3 px-10 rounded-xl w-fit  border-none  "
                  >
                    Buy <RiExchangeLine />
                  </button>

                  <button
                    onClick={() =>
                      (window.location.href = "https://www.dextools.io")
                    }
                    className="flex items-center justify-between gap-3 font-[Figtree]  hover:bg-gradient-to-tr hover:bg-primary bg-primary  text-white p-2 md:p-3 px-10 rounded-xl w-fit  border-none"
                  >
                    Chart <FaChartBar />
                  </button>
                </div>
              </Bounce>
              {/* <div
                className="text-gray-200 text-center gap-2 flex items-center cursor-copy bg-bg1 w-fit bg-opacity-40 my-3 p-1 text-sm font-bold rounded break-all"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "0xfEdCECDB9e447edd067AACA2E1e7af36c6eAD5f3"
                  );
                }}
              >
                <FaCopy />
                0xfEdCECDB9e447edd067AACA2E1e7af36c6eAD5f3
              </div> */}
            </div>
          </div>
        </section>

        <section
          className="md:min-h-[calc(100vh-64px)] flex flex-col justify-center  pt-16 items-center p-6 md:p-12 md:py-40 w-full bg-secondary bg-opacity-50"
          id="About"
          // style={{ backgroundImage: "url('images/background2.gif')" }}
        >
          <Fade top>
            {/* <h3 className="text-center text-2xl md:text-6xl mb-7  w-fit p-1 font-extrabold  text-zinc-900  font-[Figtree]">
              Why{" "}
              <span className="text-secondary">
                {" "}
                Eternity<span className=" text-primary">AI</span>
              </span>
            </h3> */}
          </Fade>
          <div className="flex flex-col md:flex-row-reverse items-center md:px-12 justify-center  md:gap-10">
            <Zoom top>
              <div className="w-full md:w-2/5 p-2 bg-gradient-to-r from-primary to-secondary rounded-full">
                <ExportedImage
                  src={about2}
                  alt="illustration"
                  layout="responsive"
                  className="rounded-full"
                />
              </div>
            </Zoom>
            <Zoom top>
              <div className="flex flex-col items-center  py-5 md:w-1/2  transition-all duration-500 h-full md:hover:border-none">
                <h4 className=" md:text-lg   text-sm  text-zinc-100 text-left font-light">
                  The Shibarium Yacht Club is backed by a team of experienced
                  developers who have a proven track record in the
                  cryptocurrency industry. The team has a strong focus on
                  security and has implemented robust security measures to
                  ensure the safety of its users funds.
                  <br />
                  <br />
                  {`We are a team of passionate individuals who believe in the potential of technology to make a positive impact on the world. We are committed to creating solutions that are accessible to everyone, and we welcome anyone who shares our vision to join us in our quest for innovation.`}
                  <br />
                  <br />
                  If you&apos;re passionate about technology and want to be part
                  of a team that is committed to making a positive impact on the
                  world, then we invite you to join us. Together, we can create
                  a better future for everyone.
                  <br />
                </h4>
              </div>
            </Zoom>
          </div>
        </section>
        <section
          className="md:min-h-[calc(100vh-64px)] flex flex-col justify-center  pt-16 items-center p-6 md:p-12 md:py-40 w-full bg-inherit"
          id="Why Shibarium Yacht Club"
          // style={{ backgroundImage: "url('images/background.webp')" }}
        >
          <Fade top>
            <h3 className="text-center text-2xl md:text-3xl mb-7  w-fit p-1 font-extrabold  text-white  font-[Figtree]">
              Why Shibarium Yacht Club
            </h3>
          </Fade>

          <div className="flex flex-col md:flex-row items-center md:px-12 justify-center  md:gap-10">
            <Zoom top>
              <div className="w-full md:w-1/2 p-2 bg-gradient-to-r from-primary to-secondary rounded-full">
                <ExportedImage
                  src={why}
                  alt="illustration"
                  layout="responsive"
                  className=" rounded-full"
                />
              </div>
            </Zoom>
            {/* <Fade top>
              <h3 className=" text-xl self-start md:text-3xl my-7  w-fit p-2 rounded-lg bg-opacity-30 font-extrabold  text-white  font-[Figtree] bg-secondary ">
                Members can
                <BsArrowReturnRight size={40} />
              </h3>
            </Fade> */}
            <div className="flex flex-col  md:items-start items-start gap-5 md:gap-6 my-5 ">
              {about.map((item, index) => (
                <Zoom key={index} top>
                  <div className=" text-white">
                    <span className=" w-full md:text-lg"> {item}</span>
                  </div>
                </Zoom>
              ))}
              <button
                onClick={() => (window.location.href = "https://t.me/")}
                className="font-[Figtree] text-xl  flex-1 border border-solid border-white w-fit p-2 px-6 md:p-3 text-white rounded-xl"
              >
                Join Us
              </button>
            </div>
          </div>
        </section>

        <section
          className="bg-black bg-opacity-40 w-full flex flex-wrap justify-center items-center gap-4 py-5 "
          id="Partners"
        >
          <Fade top>
            <h3 className="text-center w-full text-2xl md:text-3xl mb-7   p-1 font-extrabold  text-white  font-[Figtree]">
              Our Partners
            </h3>
          </Fade>
          <div className=" w-1/3 md:w-1/4   block">
            <ExportedImage src={p1} alt="" layout="responsive" className="" />
          </div>
          <div className=" w-1/3 md:w-1/4   block">
            <ExportedImage src={p3} alt="" layout="responsive" className="" />
          </div>
          <div className=" w-1/3 md:w-1/4   block">
            <ExportedImage src={p4} alt="" layout="responsive" className="" />
          </div>
          <div className=" w-1/3 md:w-1/4   block">
            <ExportedImage src={p5} alt="" layout="responsive" className="" />
          </div>
          {/* <div className=" w-1/3 md:w-1/4   block">
            <ExportedImage src={p6} alt="" layout="responsive" className="" />
          </div> */}
          <div className=" w-1/3 md:w-1/4   block">
            <ExportedImage src={p7} alt="" layout="responsive" className="" />
          </div>
          {/* <div className=" w-1/3 md:w-1/4   block">
            <ExportedImage src={p8} alt="" layout="responsive" className="" />
          </div> */}
          <div className=" w-1/3 md:w-1/4   block">
            <ExportedImage src={p10} alt="" layout="responsive" className="" />
          </div>
        </section>
        {/* <section
          className="px-6 md:px-20 py-16 md:py-24 w-full bg-inherit"
          id=""
        >
          <Fade top>
            <h3 className="text-center w-full text-2xl md:text-3xl mb-7   p-1 font-extrabold  text-white  font-[Figtree]">
              Shibarium Yacht Club Developments
            </h3>
          </Fade>
          <div className="flex flex-col md:flex-row justify-center gap-4  flex-wrap items-start w-full py-7 text-zinc-50">
            {moreFeatures.map((item, index) => (
              <div
                key={index}
                className="lg:w-[20%] md:w-2/5  p-2 border-zinc-700 border-l border-solid rounded-lg border-opacity-40  px-6 group"
              >
                <div className=" my-3 text-zinc-400 border-zinc-400  group-hover:text-primary rounded-full group-hover:border-primary border-4 shadow-lg group-hover:shadow-primary border-solid w-fit p-2 transition-all duration-700">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-lg font-bold mb-3 font-[Figtree]">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base">{item.content}</p>
              </div>
            ))}
          </div>
        </section> */}
        <section
          className="flex flex-col justify-center items-center p-6 md:p-12  w-full bg-secondary bg-opacity-40 bg-cover bg-right md:bg-fixed py-16"
          id="Tokenomics"
          // style={{ backgroundImage: "url('images/background.webp')" }}
        >
          <Fade top>
            <h3 className="text-center text-2xl md:text-3xl mb-7  w-fit p-1 font-extrabold  text-white  font-[Figtree]">
              Tokenomics
            </h3>
          </Fade>
          <div className="md:flex flex-col items-center justify-center">
            {/* <div className="flex p-2 flex-col items-center md:w-2/3">
              <div className="flex flex-col gap-1 ">
                <div className="flex  items-center justify-center flex-row gap-2 flex-wrap">
                  {tokenomics.map((item, index) => (
                    <Zoom top key={index}>
                      <h3 className="flex text-white rounded-lg item-center  justify-center bg-bg2 p-3  bg-opacity-90 w-fit border-2 border-solid border-grad ">
                        <span className="text-center  flex flex-col items-center   break-all">
                          <span className="font-bold  text-xl ">
                            {item.option}
                          </span>{" "}
                          {item.value}
                        </span>
                      </h3>
                    </Zoom>
                  ))}
                </div>
              </div>
            </div> */}
            <div className="md:flex flex-col justify-center items-center">
              <div className="flex flex-col md:flex-row md:flex-wrap justify-center w-full items-center gap-5 md:gap-6 my-5 ">
                {reward.map((item, index) => (
                  <Zoom key={index} top>
                    <div className="group p-8 md:py-12 w-full md:w-1/3  flex flex-col justify-center items-center bg-bg1 bg-opacity-40 rounded-lg">
                      <div className="block p-4 mb-3 w-20 rounded-full  bg-bg2 bg-opacity-20 self-center">
                        <ExportedImage
                          src={logo2}
                          alt="illustration"
                          layout="responsive"
                          className=" rounded-full  border-secondary border-2 border-solid animate-pulse"
                        />
                      </div>

                      <h3 className=" font-[Figtree]  z-10 text-xl  font-extrabold my-3 text-center border-gray-300 text-white self-center ">
                        {item.title}
                      </h3>
                    </div>
                  </Zoom>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="p-6 md:p-12 py-16 w-full bg-gradient-to-r from-bg2 to-bg1  flex flex-col items-center bg-cover bg-right md:bg-fixed relative "
          id="Roadmap"
          // style={{ backgroundImage: "url('images/background.webp')" }}
        >
          <Fade>
            <h3 className="text-2xl md:text-3xl mb-10  text-center w-full  font-extrabold  text-zinc-50 font-[Figtree]">
              Roadmap
            </h3>
          </Fade>

          <div className="flex flex-col justify-center w-full md:w-[60%]  md:items-end items-center  md:gap-6  ">
            <div className="block p-2 mb-3 w-full md:w-1/2 absolute ">
              <ExportedImage
                src={logo2}
                alt="illustration"
                layout="responsive"
                className=" opacity-20 md:opacity-20 border-zinc-100 border-2 border-solid"
              />
            </div>
            {roadmap.map((item, index) => (
              <Fade key={index}>
                <div className="group  md:px-8 w-full  md:w-1/2 md:even:self-start md:my-4   flex flex-col items-center justify-start bg-opacity-60 md:pl-9 border-l border-dashed border-gray-100 md:even:border-l-0 md:even:border-r relative before:h-5 before:w-5 before:rounded-full before:bg-primary before:absolute before:top-0 even:before:right-[97%]  odd:before:left-[-10px]  md:even:before:right-[-10px]">
                  <div className=" bg-none ml-5 mb-5 md:mb-0 md:ml-0  p-2 w-11/12 md:w-fit border border-zinc-50 rounded-lg">
                    <h3 className="z-10  text-xl font-[Figtree]  md:text-2xl  font-bold mt-3 text-left  text-zinc-200 ">
                      {item.title}
                    </h3>

                    <div className=" text-lg  text-zinc-200 z-10  p-3  md:px-0 md:p-0">
                      {item.desc.map((item, index) => (
                        <div
                          className="my-1 flex items-center gap-1"
                          key={index}
                        >
                          <span className="  text-zinc-3s00 text-sm">
                            - {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </section>
        {/* <section
          className="p-6 md:p-12 pb-12 w-full bg-inherit py-16 flex flex-col items-center bg-cover bg-right md:bg-fixed"
          id="How to Buy"
          // style={{ backgroundImage: "url('images/background.webp')" }}
        >
          <Fade top>
            <h3 className="text-center text-2xl md:text-3xl mb-7  w-fit p-1 font-extrabold  text-white  font-[Figtree]">
              How to Buy
            </h3>
          </Fade>

          <div className="flex flex-col justify-center items-center">
            <div className="block  w-full md:w-1/3 absolute ">
              <ExportedImage
                src={tokenimg}
                alt="illustration"
                layout="responsive"
                className=" opacity-20 md:opacity-20 border-secondary"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-center w-full md:items-start items-start gap-5 md:gap-6 my-5 ">
              {buy.map((item, index) => (
                <Zoom key={index} top>
                  <div className=" group p-8 md:py-12 w-full flex flex-col justify-center items-center border border-zinc-50 border-solid rounded-lg">
                    <h3 className="font-[Figtree] bg-primary rounded-full h-20 w-20  z-10 text-5xl flex justify-center items-center bg-opacity-40  font-extrabold my-3 text-center border-gray-300 text-white self-center ">
                      {item.title}
                    </h3>
                  

                    <div className="h-[0.3px] self-center mb-5 w-32 bg-slate-300 z-10"></div>
                    <div className="  text-white self-center z-10">
                      <p
                        className="my-1 text-center text-sm md:text-base- self-center"
                        key={index}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Zoom>
              ))}
            </div>
          </div>
        </section> */}
        <section className="  w-full bg-bg2 bg-opacity-40" id="">
          <div className=" w-full py-10 px-6 md:px-48">
            <div className="flex items-center"></div>
            <div className="flex flex-col md:flex-row items-start md:items-center w-full md:gap-3 justify-between">
              <div className="block w-1/3 self-start ">
                <ExportedImage
                  src={logo2}
                  alt="logo"
                  layout="responsive"
                  className=""
                />
              </div>
              <div className="flex  flex-col items-start justify-start md:flex-row md:gap-10 md:justify-between">
                <Fade>
                  <ul className="  flex flex-col items-start justify-start ">
                    {list.map(
                      ([name, link], index) =>
                        (link === null && (
                          <Link
                            className={`mt-2 pl-2 text-gray-50 m-1 text-center pr-5   `}
                            key={index}
                            activeClass="none"
                            to={`${name}`}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                          >
                            {name}
                          </Link>
                        )) || (
                          <a
                            className={`mt-2 pl-2 text-gray-50 m-1 text-center pr-5`}
                            key={index}
                            href={`${link}`}
                          >
                            {name}
                          </a>
                        )
                    )}
                  </ul>
                </Fade>
              </div>
            </div>

            <div className="md:flex flex-row justify-between gap-10 items-center w-full">
              {/* <div className="p-12 border border-zinc-100 border-solid rounded-3xl md:w-1/2 my-8">
                <h3 className="text-white text-lg">SUBSCRIBE TO KNOW FIRST</h3>
                <p className="text-white py-2">
                  Receive monthly news and insights in your inbox. Don&apos;t
                  miss out!
                </p>
                <input
                  type="text"
                  placeholder="ENTER EMAIL ADDRESS"
                  className=" bg-inherit text-white w-full p-3 outline-none border-b-2 "
                />
                <button
                  className="text-xl z-10 hover:bg-gradient-to-bl w-full md:w-fit  font-[Figtree] bg-gradient-to-tr from-primary to-secondary text-white p-2 mt-5  rounded-lg mr-1 border-none  text-center transition-all duration-700 px-6"
                  // href="https://www.youtube.com/watch?v=RPDG4NlIVF8&t=2s"
                >
                  Subscribe
                </button>
              </div> */}

              <Fade top>
                <div className=" flex flex-col items-center">
                  <div className="flex gap-3 my-3 justify-center items-center md:justify-start">
                    <a
                      href="https://t.me"
                      className="bg-white text-white p-3 bg-opacity-25 rounded-full"
                    >
                      <BsTelegram size={35} />
                    </a>
                    <a
                      href="https://mobile.twitter.com"
                      className="bg-white text-white  p-3 bg-opacity-25 rounded-full"
                    >
                      <BsTwitter size={35} />
                    </a>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* <section className="  w-full bg-bg2 " id="">
          <div className="md:flex w-full py-24 px-6 md:p-48">
            <div className="w-full">
              <div className="flex items-center">
                <div className="w-full flex items-center justify-start md:justify-start  gap-5">
                  <div className="block w-16 ">
                    <ExportedImage
                      src={logo}
                      alt="logo"
                      layout="responsive"
                      className=""
                    />
                  </div>
                  <p className="font-bold text-3xl font-[Figtree] text-secondary text-center break-words">
                    Eternity<span className="text-primary">AI</span>
                  </p>
                </div>
              </div>
              <p className="text-gray-200 md:text-3xl  text-xl text-center my-4 md:hidden   font-[Figtree]">
                LET&apos;S MAKE SOMETHING GREAT TOGETHER
              </p>
              <div className="flex flex-col md:flex-row  items-start w-full md:gap-3 justify-around md:justify-start">
                <div className="block w-4/5 md:w-1/4 absolute ">
                  <ExportedImage
                    src={logos}
                    alt="illustration"
                    layout="responsive"
                    className=" opacity-10 md:opacity-10 border-secondary rounded-full"
                  />
                </div>
                <div className="flex  flex-col items-start md:flex-row md:gap-10 md:justify-start">
                  <Fade>
                    <ul className="  flex flex-col items-start md:items-start justify-start ">
                      {list.map(
                        ([name, link], index) =>
                          (link === null && (
                            <Link
                              className={`mt-2 pl-2 text-gray-50 m-1 text-center pr-5   `}
                              key={index}
                              activeClass="none"
                              to={`${name}`}
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                            >
                              {name}
                            </Link>
                          )) || (
                            <a
                              className={`mt-2 pl-2 text-gray-50 m-1 text-center pr-5`}
                              key={index}
                              href={`${link}`}
                            >
                              {name}
                            </a>
                          )
                      )}
                    </ul>
                  </Fade>
                </div>
              </div>

              <div className="md:flex flex-row justify-between gap-10 items-center w-full ">
                <Fade>
                  <div className="flex gap-3 my-3 justify-center items-center md:justify-start">
                    <a
                      href="https://t.me"
                      className="text-zinc-500 rounded-full"
                    >
                      <BsTelegram size={30} />
                    </a>
                    <a
                      href="https://twitter.com"
                      className="text-zinc-500 rounded-full"
                    >
                      <BsTwitter size={30} />
                    </a>
                    <a
                      href="https://medium.com"
                      className="text-zinc-500 rounded-full"
                    >
                      <BsMedium size={30} />
                    </a>
                  </div>
                </Fade>
              </div>
            </div>
          
          </div>
        </section> */}

        <section className=" text-sm bg-bg2 text-center p-1 text-white">
          Copyright © {new Date().getFullYear()} Shibarium Yacht Club. All
          Rights Reserved.
        </section>
      </Layout>
    </div>
  );
};

export default Home;
