/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Brawlers } from "@/components/Brawlers";

interface Club {
  name: string;
  tag: string;
}

interface Brawler {
  id: number;
  name: string;
  rank: number;
  trophies: number;
  highestTrophies: number;
  power: number;
  starPowers: string;
  gadgets: string;
  gears: string;
  mastery: {
    rank: string;
    points: number;
  };
}

interface PlayerData {
  name: string;
  tag: string;
  trophies: number;
  highestTrophies: number;
  expLevel: number;
  "3vs3Victories": number;
  soloVictories: number;
  duoVictories: number;
  club?: Club;
  brawlers: Brawler[];
  icon: {
    id: number;
  };
}

interface PlayerPageProps {
  params: {
    id: string;
  };
}

export default function PlayerPage({ params }: PlayerPageProps) {
  const playerTag = params.id.replace("#", ""); // Remove # for API request
  const [playerData, setPlayerData] = useState<PlayerData | null>(null);
  const [error, setError] = useState<string>("");
  const [playerIcon, setPlayerIcon] = useState<string>("");
  const [sortBy, setSortBy] = useState<
    "release" | "name" | "power" | "trophyDesc" | "trophyAsc"
  >("release");

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await axios.get(
          `/api/player?tag=%23${encodeURIComponent(playerTag)}`
        );
        setPlayerData(response.data);
        setError("");
        if (response.data.icon?.id) {
          fetchIconUrl(response.data.icon.id);
        }
      } catch (error) {
        setError("Player not found or an error occurred.");
        setPlayerData(null);
      }
    };

    fetchPlayerData();
  }, [playerTag]);

  const fetchIconUrl = async (iconId: number): Promise<void> => {
    try {
      const response = await axios.get("https://api.brawlapi.com/v1/icons");
      if (response.status !== 200) {
        throw new Error("Error getting icons from BrawlAPI");
      }
      const iconUrl = response.data.player[iconId].imageUrl;
      setPlayerIcon(iconUrl);
    } catch (err) {
      console.error("Failed to fetch icon:", err);
      setPlayerIcon("");
    }
  };

  const sortBrawlers = (
    brawlers: Brawler[],
    criterion: "release" | "name" | "power" | "trophyDesc" | "trophyAsc"
  ) => {
    return [...brawlers].sort((a, b) => {
      if (criterion === "name") {
        return a.name.localeCompare(b.name);
      }
      if (criterion === "trophyDesc") {
        return b.trophies - a.trophies;
      }
      if (criterion === "trophyAsc") {
        return a.trophies - b.trophies;
      }
      if (criterion === "power") {
        return b.power - a.power;
      } else {
        return a.id - b.id;
      }
    });
  };

  const sortedBrawlers = playerData?.brawlers
    ? sortBrawlers(playerData.brawlers, sortBy)
    : [];

  return (
    <main className="bg-gradient-to-b from-indigo-950 to-[#13102f]">
      <div className="w-screen h-full flex py-6 sm:py-8">
        {!playerData && !error && (
          <div className="w-screen h-screen justify-center flex m-auto pointer-events-auto">
            <p className=" drop-shadow-[0.5px_2px_rgba(1,1,1,1)] text-2xl justify-center flex flex-row items-center -ml-3 -mt-40">
              <img
                className="w-max h-10"
                src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9DWDRCcTJoUUVuR3JXd3F4aG9ySy5wbmcifQ:supercell:CiGKIj-yn0rPsAENIFv5GP7mYM8ZkVuvwpzw9XBiaOQ?width=800"
              />
              Loading...
            </p>
          </div>
        )}

        {/* Player not found */}
        {error && (
          <div className="w-screen h-screen justify-center flex m-auto pointer-events-auto">
            <p className="text-rose-400 drop-shadow-[0.5px_2px_rgba(1,1,1,1)] text-2xl justify-center flex flex-row items-center -ml-3 -mt-40">
              <img
                className="w-max h-10"
                src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9DWDRCcTJoUUVuR3JXd3F4aG9ySy5wbmcifQ:supercell:CiGKIj-yn0rPsAENIFv5GP7mYM8ZkVuvwpzw9XBiaOQ?width=800"
              />
              Player doesn't exist.
            </p>
          </div>
        )}
        <div className="flex justify-center m-auto flex-col">
          {playerData && (
            <div className="flex flex-col">
              <div className="flex flex-col m-auto md:scale-110 md:mt-6 lg:scale-125 lg:mt-12">
                <div className="flex gap-4">
                  {playerIcon && (
                    <img
                      src={playerIcon}
                      alt="Player Icon"
                      className="w-max h-32"
                    />
                  )}
                  <div className="flex flex-col mt-2">
                    <div className="text-2xl p-2 border-2 rounded-lg border-x-violet-800 border-t-indigo-600 border-b-[#2e166f] bg-indigo-900">
                      {playerData.name}
                    </div>
                    <p className="uppercase text-lg mt-1 text-indigo-300 text-opacity-75">
                      {playerData.tag}
                    </p>
                    <div className="flex items-center gap-0.5 mt-1">
                      <img
                        className="w-max h-6"
                        src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9waFFBanJmTTd0bldQSEFQUTNTTS5wbmcifQ:supercell:uGkNlUITV98HQEBqST8RoyNlyyAA7-NCuOKpR45pPUU?width=2400"
                      />
                      <p className="text-xl">{playerData.trophies}</p>
                      <p className="text-lg opacity-50">
                        ({playerData.highestTrophies})
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-center m-auto gap-4 mt-6">
                  <p className="flex flex-row items-center gap-0.5">
                    <p className="opacity-75 text-blue-200">3v3 wins</p>-{" "}
                    {playerData["3vs3Victories"]}
                  </p>
                  <p className="flex flex-row items-center gap-0.5">
                    <p className="opacity-75 text-blue-200">Duo</p>-{" "}
                    {playerData.duoVictories}
                  </p>
                  <p className="flex flex-row items-center gap-0.5">
                    <p className="opacity-75 text-blue-200">Solo</p>-{" "}
                    {playerData.soloVictories}
                  </p>
                </div>

                {playerData.club && (
                  <div className="flex justify-center items-center flex-row my-8">
                    <img
                      className="w-max h-16 -mr-5 z-50"
                      src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9HY0h3UnJZWDJ1RFd0WmZmYWloNi5wbmcifQ:supercell:rvUB1BvKlq2QoQq10EEdO8mfdZYmBIm9kpsYhKAEdDw?width=800"
                    />
                    <div className="-ml-3 z-10 flex justify-center flex-row items-center gap-1 bg-indigo-900 bg-opacity-50 border-2 border-indigo-900 rounded-3xl p-2 pr-3 pl-7">
                      <p className="text-lg">{playerData.club.name}</p>
                      <p className="text-indigo-300 text-opacity-75 mt-0.5 text-sm">
                        ({playerData.club.tag})
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col my-4 sm:mb-8 lg:mb-12 sm:mt-12 md:mt-20">
                <p className="ml-3 mb-2 sm:mb-3 text-indigo-200">Sort by:</p>
                <div className="flex justify-center gap-1.5 sm:-ml-40 md:-ml-[408px] lg:-ml-[592px]">
                  <button
                    onClick={() => setSortBy("release")}
                    className={`p-1 -ml-2 px-3 rounded-t-lg bg-black ${
                      sortBy === "release" ? "text-indigo-200" : "text-gray-700"
                    }`}
                  >
                    Release
                  </button>
                  <button
                    onClick={() => setSortBy("trophyDesc")}
                    className={`p-1 px-3 rounded-t-lg bg-black ${
                      sortBy === "trophyDesc"
                        ? "text-indigo-200"
                        : "text-gray-700"
                    }`}
                  >
                    Trophies
                  </button>
                  <button
                    onClick={() => setSortBy("power")}
                    className={`p-1 px-3 rounded-t-lg bg-black ${
                      sortBy === "power" ? "text-indigo-200" : "text-gray-700"
                    }`}
                  >
                    Power
                  </button>
                  <button
                    onClick={() => setSortBy("name")}
                    className={`p-1 px-3 rounded-t-lg bg-black ${
                      sortBy === "name" ? "text-indigo-200" : "text-gray-700"
                    }`}
                  >
                    Name
                  </button>
                </div>
                <div className="w-80 h-0.5 bg-indigo-900 bg-opacity-50"></div>
              </div>

              {sortedBrawlers.length > 0 && (
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center m-auto">
                  {sortedBrawlers.map((brawler: Brawler) => (
                    <Brawlers key={brawler.id} brawler={brawler} />
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
