/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Brawlers } from "@/components/Brawlers";
import { Power } from "@/components/Power";
import { Highest } from "@/components/Highest";
import { Gadget } from "@/components/Gadgets";

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
  const playerTag = params.id.replace("#", "");
  const [playerData, setPlayerData] = useState<PlayerData | null>(null);
  const [error, setError] = useState<string>("");
  const [playerIcon, setPlayerIcon] = useState<string>("");
  const [sortBy, setSortBy] = useState<
    "name" | "power" | "trophy" | "highe" | "gadget"
  >("trophy");

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
    criterion: "name" | "power" | "trophy" | "highe" | "gadget"
  ) => {
    return [...brawlers].sort((a, b) => {
      if (criterion === "name") {
        return a.name.localeCompare(b.name);
      }
      if (criterion === "highe") {
        return b.highestTrophies - a.highestTrophies;
      }
      if (criterion === "power") {
        return b.power - a.power;
      } else {
        return b.trophies - a.trophies;
      }
    });
  };

  const sortedBrawlers = playerData?.brawlers
    ? sortBrawlers(playerData.brawlers, sortBy)
    : [];

  return (
    <main className="bg-gradient-to-b from-[#18153d] to-[#0b0a1d]">
      <div className="w-screen h-full flex py-6 sm:py-8 lg:min-h-screen xl:min-h-full">
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
                className="w-max h-12 -mt-2 mr-2"
                src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC80OTl2VUNqYXdoSzladjVmVVdWbi5wbmcifQ:supercell:Kt93jV6WRecmeitp917vGAOK1opxfa40hrkANGIf3Ac?width=800"
              />
              Player doesn't exist.
            </p>
          </div>
        )}
        <div className="flex justify-center m-auto flex-col">
          {playerData && (
            <div className="flex flex-col lg:flex-row gap-10 mb-20">
              <div className="group flex flex-col h-[521px] w-[322px] bg-gradient-to-b from-indigo-950 to-[#0e001d] m-auto mt-4 lg:mt-[52px] xl:mt-11 border border-blue-300 border-opacity-30 rounded-2xl p-8 hover:skew-y-6 hover:skew-x-3 hover:scale-90 md:hover:scale-105 hover:border-l-4 hover:border-b-4 duration-75 relative">
                <div className="flex gap-2 flex-col justify-center mx-auto">
                  <div className="text-3xl flex absolute justify-center left-0 top-0 mt-6 ml-8 w-64 py-1 ">
                    {playerData.name}
                  </div>

                  {playerIcon && (
                    <img
                      src={playerIcon}
                      alt="Player Icon"
                      className="w-max h-44 z-20 mx-auto mt-11"
                    />
                  )}

                  <div className="flex flex-row items-center mt-2 -ml-8">
                    <div className="flex flex-row items-center">
                      <img
                        className="w-max h-10"
                        src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9waFFBanJmTTd0bldQSEFQUTNTTS5wbmcifQ:supercell:uGkNlUITV98HQEBqST8RoyNlyyAA7-NCuOKpR45pPUU?width=2400"
                      />
                      <p className="text-4xl">{playerData.highestTrophies}</p>
                    </div>
                    <div className="flex flex-row items-center justify-center absolute right-0 mr-8">
                      <img
                        className="w-max h-16 z-10 opacity-75"
                        src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC8yUlNmUjkxN3RTNXZqdUxlZlJuai5wbmcifQ:supercell:gVRyzVk4AUjMCZwkpFvt-d24lcXC8ZCzmxjWGxqa4k4?width=800"
                      />
                      <p className="z-20 -mt-1 -ml-0.5 absolute">
                        {playerData.expLevel}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-2 -ml-7">
                    <div className="flex flex-row items-center gap-1">
                      <img
                        className="w-max h-8 -ml-1"
                        src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9SM1IyckRRaHBaREhMa0NCejlBUC5wbmcifQ:supercell:WkDBho-g-Ebpc8OT3q-1Y7SSmio4BXPXHTUDI8Z6SKU?width=800"
                      />
                      <p className="text-xl">{playerData["3vs3Victories"]}</p>
                    </div>
                    <div className="flex flex-row items-center gap-1">
                      <img
                        className="w-max h-10"
                        src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9nbkxKdVIxRHlZTE1qUlMzV2pMTC5wbmcifQ:supercell:OfOmUHA0JeavDf4uX8SuyvQBmOq0AwN8aKuXPiM946Q?width=800"
                      />
                      <p className="text-xl">{playerData.soloVictories}</p>
                    </div>
                  </div>
                  {playerData.club && (
                    <div
                      className={`flex justify-center m-auto items-center flex-row`}
                    >
                      <div
                        className={` z-10 flex absolute bottom-0 flex-col items-center mb-8`}
                      >
                        <div className="flex flex-row items-center gap-1 -mb-1">
                          <img
                            className="w-max h-10 mt-2"
                            src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9TZEpIaTNZSnlOZzRuVGhSUXdlRC5wbmcifQ:supercell:kYN143pyE7uGUlxD3mYTNZH2O7NNmslWDxxGd9OalTw?width=800"
                          />
                          <p className="text-2xl m-auto text-indigo-200 flex justify-center">
                            {playerData.club.name}
                          </p>
                        </div>
                        <p className="text-indigo-400 text-opacity-75 text-sm m-auto flex justify-center">
                          {playerData.club.tag}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="absolute w-[308px] group-hover:w-[306px] h-[506px] group-hover:h-[504px] border-[10px] group-hover:border-r-8 group-hover:border-t-8 border-t-indigo-600 border-b-purple-950 border-x-violet-900 border-opacity-75 group-hover:border-opacity-75 rounded-2xl top-0 left-0 ml-1.5 mt-1.5 pointer-events-none"></div>
              </div>

              <div className="flex flex-col gap-3 md:gap-5 xl:gap-3">
                <div className="flex flex-row items-center justify-center m-auto">
                  <p className="text-indigo-200">Sort by</p>
                  <select
                    className="rounded-xl ml-2 p-1 text-indigo-200 bg-indigo-900 outline-none"
                    value={sortBy}
                    onChange={(e) =>
                      setSortBy(e.target.value as "power" | "trophy" | "highe")
                    }
                  >
                    <option value="trophy">Current Trophies</option>
                    <option value="highe">Highest Trophies</option>
                    <option value="power">Power Level</option>
                    <option value="gadget">Items</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-center">
                    {sortedBrawlers.length > 0 && (
                      <ul
                        className={`grid grid-cols-5 xs:grid-cols-6 md:grid-cols-9 lg:grid-cols-7 xl:grid-cols-9 ${
                          sortBy === "trophy" ? "visible" : "hidden"
                        }`}
                      >
                        {sortedBrawlers.map((brawler: Brawler) => (
                          <Brawlers key={brawler.id} brawler={brawler} />
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="flex justify-center">
                    {sortedBrawlers.length > 0 && (
                      <ul
                        className={`grid grid-cols-5 xs:grid-cols-6 md:grid-cols-9 lg:grid-cols-7 xl:grid-cols-9 ${
                          sortBy === "highe" ? "visible" : "hidden"
                        }`}
                      >
                        {sortedBrawlers.map((brawler: Brawler) => (
                          <Highest key={brawler.id} brawler={brawler} />
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="flex justify-center">
                    {sortedBrawlers.length > 0 && (
                      <ul
                        className={`grid grid-cols-5 xs:grid-cols-6 md:grid-cols-9 lg:grid-cols-7 xl:grid-cols-9 ${
                          sortBy === "power" ? "visible" : "hidden"
                        }`}
                      >
                        {sortedBrawlers.map((brawler: Brawler) => (
                          <Power key={brawler.id} brawler={brawler} />
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="flex justify-center">
                    {sortedBrawlers.length > 0 && (
                      <ul
                        className={`grid grid-cols-5 xs:grid-cols-6 md:grid-cols-9 lg:grid-cols-7 xl:grid-cols-9 ${
                          sortBy === "gadget" ? "visible" : "hidden"
                        }`}
                      >
                        {sortedBrawlers.map((brawler: Brawler) => (
                          <Gadget key={brawler.id} brawler={brawler} />
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
