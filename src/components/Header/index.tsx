"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { RiMapFill } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";
import { PiCrownSimpleFill } from "react-icons/pi";
import { LuCrown } from "react-icons/lu";
import { RiVipCrownFill } from "react-icons/ri";
import { bebas, dmSans } from "@/app/ui/fonts";
import Link from "next/link";

export const Header = () => {
  const [playerTag, setPlayerTag] = useState<string>("");
  const router = useRouter();
  //   const [showHeader, setShowHeader] = useState(true);
  //   const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleFetchPlayerData = () => {
    if (playerTag) {
      router.push(`/players/${playerTag}`);
    }
  };

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const currentScroll =
  //         window.scrollY || document.documentElement.scrollTop;
  //       if (currentScroll < lastScrollTop || currentScroll < 100) {
  //         setShowHeader(true);
  //       } else {
  //         setShowHeader(false);
  //       }
  //       setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, [lastScrollTop]);

  return (
    <header
      className={`w-screen bg-indigo-950 border-b-2 border-indigo-900 border-opacity-50 h-20 flex flex-row items-center justify-center`}
    >
      <div className="flex flex-row sm:justify-between m-auto items-center">
        <img
          className="w-max h-12 absolute left-0 mx-2.5"
          src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9DSGJoTDRXcFd3dEJkWE1IYlFNSi5wbmcifQ:supercell:Y8HWi_58KUpyQL0DcpXAE-7bVvMfM6QXB2PujsjHJFQ?width=800"
        />
        <div
          className={`${dmSans.className} flex tracking-tighter pointer-events-none opacity-0 font-medium sm:opacity-100 text-violet-300 text-2xl absolute left-0 ml-16 m-auto justify-center`}
        >
          mid.karma
        </div>
        <div className="flex justify-center text-xl m-auto border-2 p-2  bg-gradient-to-b from-[#1b173f] to-indigo-950 border-indigo-900 border-opacity-100 rounded-2xl">
          <p>#</p>
          <input
            placeholder="your player tag!"
            value={playerTag}
            onChange={(e) => setPlayerTag(e.target.value)}
            className="uppercase outline-none text-indigo-200 w-44 sm:w-48 bg-inherit"
          />
          <button
            onClick={handleFetchPlayerData}
            className="mr-1 text-indigo-200 active:text-pink-300 hover:-rotate-12 outline-none"
          >
            <FaSearch />
          </button>
        </div>
        <Link
          href="/"
          className="absolute right-0 mr-[118px] opacity-0 pointer-events-none sm:opacity-100"
        >
          <div className="flex justify-center absolute bg-pink-600 text-3xl p-1.5 rounded-lg">
            <PiCrownSimpleFill />
          </div>
          <div className="flex justify-center bg-fuchsia-900 mt-1.5 text-3xl  p-1.5 rounded-lg">
            <PiCrownSimpleFill />
          </div>
        </Link>
        <Link
          href="/"
          className="absolute right-0 mr-16 opacity-0 pointer-events-none sm:opacity-100"
        >
          <div className="flex justify-center absolute bg-pink-600 text-3xl p-1.5 rounded-lg">
            <RiMapFill />
          </div>
          <div className="flex justify-center bg-fuchsia-900 mt-1.5 text-3xl  p-1.5 rounded-lg">
            <RiMapFill />
          </div>
        </Link>
        <Link href="/" className="absolute right-0 mx-2.5">
          <div className="flex justify-center absolute bg-pink-600 text-3xl p-1.5 rounded-lg active:translate-y-1.5">
            <GoHomeFill />
          </div>
          <div className="flex justify-center bg-fuchsia-900 mt-1.5 text-3xl  p-1.5 rounded-lg pointer-events-none">
            <GoHomeFill />
          </div>
        </Link>
      </div>
    </header>
  );
};
