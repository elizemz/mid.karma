"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { RiMapFill } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";
import { PiCrownSimpleFill } from "react-icons/pi";
import { dmSans } from "@/app/ui/fonts";
import Link from "next/link";

export const Header = () => {
  const [playerTag, setPlayerTag] = useState<string>("");
  const router = useRouter();

  const handleFetchPlayerData = () => {
    if (playerTag) {
      router.push(`/players/${playerTag}`);
    }
  };

  const handleKeyPress = (event: { key: any }) => {
    if (event.key === "Enter") return handleFetchPlayerData();
  };

  return (
    <header
      className={`w-screen bg-[#191640] border-b border-indigo-800 border-opacity-40 h-20 flex flex-row items-center justify-between`}
    >
      <div className="flex flex-row sm:justify-between m-auto items-center">
        <Link
          className="absolute left-0 flex flex-row pointer-events-auto ml-1.5 xs:ml-3"
          href="/"
        >
          <img
            className="w-max h-12"
            src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9DSGJoTDRXcFd3dEJkWE1IYlFNSi5wbmcifQ:supercell:Y8HWi_58KUpyQL0DcpXAE-7bVvMfM6QXB2PujsjHJFQ?width=800"
          />
          <div
            className={`${dmSans.className} flex tracking-tighter opacity-0 font-medium sm:opacity-100 text-violet-300 text-2xl m-auto justify-center`}
          >
            mid.karma
          </div>
        </Link>
        <div className="flex justify-center text-xl m-auto border p-2  bg-gradient-to-b from-[#13102c] to-[#1b173f] border-indigo-900 border-opacity-100 rounded-2xl">
          <p>#</p>
          <input
            placeholder="your player tag!"
            value={playerTag}
            onChange={(e) => setPlayerTag(e.target.value)}
            className="uppercase outline-none text-indigo-200 w-44 sm:w-48 bg-inherit"
          />
          <button
            onClick={handleFetchPlayerData}
            onKeyDown={handleKeyPress}
            className="mr-1 text-indigo-200 active:text-violet-300 hover:-rotate-12 outline-none"
          >
            <FaSearch />
          </button>
        </div>
        <div className="flex flex-row justify-center absolute right-0 mr-8 sm:mr-4 items-center gap-3">
          <div className="absolute sm:relative opacity-0  sm:opacity-100">
            <div className="flex justify-center absolute bg-indigo-700 text-3xl p-1.5 rounded-lg  active:mt-1">
              <img
                className="w-max h-8"
                src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC82ZFZwQ2lySDRRZ1lEYU54QkpuVy5wbmcifQ:supercell:cABbBwXluQNg_jzs_sH1kad_INpU7LIyvfsB-ozSAUs?width=800"
              />
            </div>
            <div className="flex justify-center bg-violet-950 mt-1.5 text-3xl  p-1.5 rounded-lg">
              <img
                className="w-max h-8"
                src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC82ZFZwQ2lySDRRZ1lEYU54QkpuVy5wbmcifQ:supercell:cABbBwXluQNg_jzs_sH1kad_INpU7LIyvfsB-ozSAUs?width=800"
              />
            </div>
          </div>
          <div className="absolute sm:relative opacity-0  sm:opacity-100">
            <div className="flex justify-center absolute bg-indigo-700 text-3xl p-1.5 rounded-lg  active:mt-1">
              <img
                className="w-max h-8"
                src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC83NWQxejNlMzZ6QXNzbU1URVdCdy5wbmcifQ:supercell:POAaehHzOOrs5AbN4nGFPWrrvJLAs6CKFNCcVEdjWqc?width=800"
              />
            </div>
            <div className="flex justify-center bg-violet-950 mt-1.5 text-3xl  p-1.5 rounded-lg">
              <img
                className="w-max h-8"
                src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC83NWQxejNlMzZ6QXNzbU1URVdCdy5wbmcifQ:supercell:POAaehHzOOrs5AbN4nGFPWrrvJLAs6CKFNCcVEdjWqc?width=800"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
