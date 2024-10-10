/* eslint-disable @next/next/no-img-element */
"use client";
import { Guide } from "@/components/Guide";

export default function HomePage() {
  return (
    <main className="w-screen h-screen bg-gradient-to-b flex flex-col justify-center m-auto from-indigo-950 to-[#12102e]">
      <div className="flex flex-col justify-center m-auto">
        <div className="flex justify-center">
          <Guide />
        </div>
        <div className="mt-8 flex justify-center flex-col gap-3">
          <div className="flex flex-row justify-center items-center">
            1. Your current trophies -
            <div className="flex items-center bg-gray-950 rounded-t w-max max-h-7 px-1">
              <p className="text-2xl">751</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center">
            2. Record trophy count -
            <div className="flex items-center bg-gray-950 rounded-t w-max max-h-7 px-1">
              <p className="text-xl text-gray-400">(926)</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center">
            3. Click
            <div className="z-20">
              <img
                className="peer w-max h-8"
                src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9oV3NONHZBTTdoNGg1bWYyOTZCZS5wbmcifQ:supercell:t7rsf5lIrYT9rpnnvYJiTOc0vuuOEreIWLdktDue1wM?width=2400"
              />
            </div>
            for mastery point info.
          </div>
        </div>
      </div>
    </main>
  );
}
// /* eslint-disable @next/next/no-img-element */
// "use client";

// import { useState } from "react";
// import axios from "axios";
// import { Brawlers } from "@/components/Brawlers";
// import { Guide } from "@/components/Guide";

// interface Club {
//   name: string;
//   tag: string;
// }

// interface Brawler {
//   id: number;
//   name: string;
//   rank: number;
//   trophies: number;
//   highestTrophies: number;
//   power: number;
//   starPowers: string;
//   gadgets: string;
//   gears: string;
//   Mastery: string;
// }

// interface PlayerData {
//   name: string;
//   tag: string;
//   trophies: number;
//   highestTrophies: number;
//   expLevel: number;
//   "3vs3Victories": number;
//   soloVictories: number;
//   duoVictories: number;
//   club?: Club;
//   brawlers: Brawler[];
//   icon: {
//     id: number;
//   };
// }

// export default function HomePage() {
//   const [playerTag, setPlayerTag] = useState<string>("");
//   const [playerData, setPlayerData] = useState<PlayerData | null>(null);
//   const [error, setError] = useState<string>("");
//   const [playerIcon, setPlayerIcon] = useState<string>("");
//   const [sortBy, setSortBy] = useState<
//     "release" | "name" | "power" | "trophyDesc" | "trophyAsc"
//   >("release");

//   const fetchIconUrl = async (iconId: number): Promise<void> => {
//     try {
//       const response = await axios.get("https://api.brawlapi.com/v1/icons");
//       if (response.status !== 200) {
//         throw new Error("Error getting icons from BrawlAPI");
//       }
//       const iconUrl = response.data.player[iconId].imageUrl;
//       setPlayerIcon(iconUrl);
//     } catch (err) {
//       console.error("Failed to fetch icon:", err);
//       setPlayerIcon("");
//     }
//   };

//   const handleFetchPlayerData = async () => {
//     try {
//       const response = await axios.get(
//         `/api/player?tag=%23${encodeURIComponent(playerTag)}`
//       );
//       setPlayerData(response.data);
//       setError("");
//       if (response.data.icon?.id) {
//         fetchIconUrl(response.data.icon.id);
//       }
//     } catch (error) {
//       setError("Player not found or an error occurred.");
//       setPlayerData(null);
//     }
//   };

//   const sortBrawlers = (
//     brawlers: Brawler[],
//     criterion: "release" | "name" | "power" | "trophyDesc" | "trophyAsc"
//   ) => {
//     return [...brawlers].sort((a, b) => {
//       if (criterion === "name") {
//         return a.name.localeCompare(b.name);
//       }
//       if (criterion === "trophyDesc") {
//         return b.trophies - a.trophies;
//       }
//       if (criterion === "trophyAsc") {
//         return a.trophies - b.trophies;
//       }
//       if (criterion === "power") {
//         return b.power - a.power;
//       } else {
//         return a.id - b.id;
//       }
//     });
//   };

//   const sortedBrawlers = playerData?.brawlers
//     ? sortBrawlers(playerData.brawlers, sortBy)
//     : [];

//   return (
//     <main>
//       <div className="w-screen h-full flex">
//         <div className="flex justify-center m-auto flex-col">
//           <div className="flex justify-center m-auto flex-col">
//             <h1>Brawl Stars Player Search</h1>
//             <input
//               placeholder="Your Player TAG!"
//               value={playerTag}
//               onChange={(e) => setPlayerTag(e.target.value)}
//               className="text-black uppercase"
//             />
//             <button
//               onClick={handleFetchPlayerData}
//               style={{ padding: "5px 10px" }}
//             >
//               Search
//             </button>
//             {error && <p style={{ color: "red" }}>{error}</p>}
//           </div>

//           <Guide />

//           {playerData && (
//             <div className="flex flex-col">
//               <div className="flex justify-center flex-col m-auto">
//                 {playerIcon && (
//                   <img
//                     src={playerIcon}
//                     alt="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9YNk14UEFmOHpQcG5YdDZVd0oybS5wbmcifQ:supercell:F0FN7C_y_jY00qq08dr8WWuA9YvSWxio4CpdqxMSKa0?width=2400"
//                     className="w-max h-64"
//                   />
//                 )}
//                 <p>{playerData.name}</p>
//                 <p className="uppercase">{playerData.tag}</p>
//                 <p>{playerData.trophies} Trophies</p>
//                 <p>Highest Trophies: {playerData.highestTrophies}</p>
//                 <p>Exp Level: {playerData.expLevel}</p>
//                 <p>3v3 Victories: {playerData["3vs3Victories"]}</p>
//                 <p>Solo Victories: {playerData.soloVictories}</p>
//                 <p>Duo Victories: {playerData.duoVictories}</p>

//                 {playerData.club && (
//                   <div>
//                     <p>Club: {playerData.club.name}</p>
//                     <p>Club Tag: {playerData.club.tag}</p>
//                   </div>
//                 )}
//               </div>

//               <div className="flex justify-center gap-4 my-4">
//                 <button
//                   onClick={() => setSortBy("release")}
//                   className={`px-4 py-2 ${
//                     sortBy === "release"
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-200"
//                   }`}
//                 >
//                   Release
//                 </button>
//                 <button
//                   onClick={() => setSortBy("trophyDesc")}
//                   className={`px-4 py-2 ${
//                     sortBy === "trophyDesc"
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-200"
//                   }`}
//                 >
//                   Trophies
//                 </button>
//                 <button
//                   onClick={() => setSortBy("power")}
//                   className={`px-4 py-2 ${
//                     sortBy === "power"
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-200"
//                   }`}
//                 >
//                   Power
//                 </button>
//                 <button
//                   onClick={() => setSortBy("name")}
//                   className={`px-4 py-2 ${
//                     sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"
//                   }`}
//                 >
//                   Name
//                 </button>
//               </div>

//               {sortedBrawlers.length > 0 && (
//                 <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//                   {sortedBrawlers.map((brawler: Brawler) => (
//                     <Brawlers key={brawler.id} brawler={brawler} />
//                   ))}
//                 </ul>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </main>
//   );
// }
