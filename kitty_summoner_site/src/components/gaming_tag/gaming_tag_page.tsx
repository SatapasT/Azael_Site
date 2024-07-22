import React, { useState, useEffect } from "react";
import LeagueIcon from '../../assets/images/league_icon.webp';
import FinalFantasyIcon from '../../assets/images/final_fantasy_xiv_icon.webp';
import SteamIcon from '../../assets/images/steam_icon.webp';
import ValorantIcon from '../../assets/images/valorant_icon.webp';
import ClashOfClanIcon from '../../assets/images/clash_of_clan_icon.webp';
import OverwatchIcon from '../../assets/images/overwatch_icon.webp';
import FortniteIcon from '../../assets/images/fortnite_icon.webp';
import SmashUltimateIcon from '../../assets/images/smash_ultimate_icon.webp';
import VRChatIcon from '../../assets/images/VRChat_Icon.webp';
import LoadingSpinner from "../loading_spinner"


const GamingTagPage:React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imagePromises = [
      LeagueIcon,
      FinalFantasyIcon,
      SteamIcon,
      ValorantIcon,
      ClashOfClanIcon,
      OverwatchIcon,
      FortniteIcon,
      SmashUltimateIcon,
      VRChatIcon,
    ].map(src => {
      return new Promise(resolve => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve;
      });
    });

    Promise.all(imagePromises).then(() => setLoading(false));
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen pb-10">
      <div className="py-2 text-white bg-clip-text text-8xl font-extrabold text-transparent text-center mt-4">
        Main Games
      </div>
      <div className="py-2 text-white bg-clip-text font-extrabold text-transparent text-center mt-4">
        Click on the icon to be directed!
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 p-4 h-1/2 py-8">
        <div className="h-1/5 md:ml-4">
          <a href="https://www.op.gg/summoners/euw/Kitty%20Summoner-Meow" target="_blank" rel="noopener noreferrer">
            <img src={LeagueIcon} alt="League of Legends" className="w-1/2 h-auto mx-auto enlarge" />
          </a>
          <div className="text-white text-center text-2xl">
            League of Legends
          </div>
          <div className="text-gray-500 text-center">
            @Kitty Summoner#Meow
          </div>
        </div>
        <div className="h-1/5 md:ml-4">
          <a href="https://eu.finalfantasyxiv.com/lodestone/character/36651684/" target="_blank" rel="noopener noreferrer">
            <img src={FinalFantasyIcon} alt="Final Fantasy XIV" className="w-1/2 h-auto mx-auto enlarge" />
          </a>
          <div className="text-white text-center text-2xl">
            Final Fantasy XIV
          </div>
          <div className="text-gray-500 text-center">
            @Kitty Summoner#Pheonix
          </div>
        </div>
      </div>
      <div className="text-white text-3xl mt-8 py-12">
        Every Other Games
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 p-4 h-1/2 py-8">
        <div className="h-1/5 md:ml-4 ">
          <a href="https://vrchat.com/home/user/usr_87bd4764-441e-40d7-ae6c-c82b91165f43" target="_blank" rel="noopener noreferrer">
            <img src={VRChatIcon} alt="VRChat" className="w-1/2 h-auto mx-auto enlarge" />
          </a>
          <div className="text-white text-center text-2xl ">
            VRChat
          </div>
          <div className="text-gray-500 text-center">
            Kitty Summoner
          </div>
        </div>
        <div className="h-1/5 md:ml-4 ">
          <a href="https://steamcommunity.com/id/KittySummoner/" target="_blank" rel="noopener noreferrer">
            <img src={SteamIcon} alt="Steam" className="w-1/2 h-auto mx-auto enlarge" />
          </a>
          <div className="text-white text-center text-2xl ">
            Steam
          </div>
          <div className="text-gray-500 text-center">
            Kitty Summoner
          </div>
        </div>

        <div className="h-1/5 md:ml-4 ">
          <a href="https://tracker.gg/valorant/profile/riot/Kitty%20Summoner%23Sugar/overview" target="_blank" rel="noopener noreferrer">
            <img src={ValorantIcon} alt="Valorant" className="w-1/2 h-auto mx-auto enlarge" />
          </a>
          <div className="text-white text-center text-2xl ">
            Valorant
          </div>
          <div className="text-gray-500 text-center">
            KittySummonr#Sugar
          </div>
        </div>

        <div className="h-1/5 md:ml-4 ">
          <a href="https://www.clashofstats.com/players/gentlemen-gnar-9LPPQJCG/army#tabs" target="_blank" rel="noopener noreferrer">
            <img src={ClashOfClanIcon} alt="Clash of Clans" className="w-1/2 h-auto mx-auto enlarge" />
          </a>
          <div className="text-white text-center text-2xl ">
            Clash of Clans
          </div>
          <div className="text-gray-500 text-center">
            Gentlemen Gnar#9LPPQJCG
          </div>
        </div>

        <div className="h-1/5 md:ml-4 ">
          <a>
            <img src={OverwatchIcon} alt="Overwatch" className="w-1/2 h-auto mx-auto" />
          </a>
          <div className="text-white text-center text-2xl ">
            Overwatch
          </div>
          <div className="text-gray-500 text-center">
            KittySummonr#11449
          </div>
        </div>

        <div className="h-1/5 md:ml-4 ">
          <a href="https://fortnitetracker.com/profile/all/Kitty%20Summoner" target="_blank" rel="noopener noreferrer">
            <img src={FortniteIcon} alt="Fortnite" className="w-1/2 h-auto mx-auto enlarge" />
          </a>
          <div className="text-white text-center text-2xl ">
            Fortnite
          </div>
          <div className="text-gray-500 text-center">
            Kitty Summoner
          </div>
        </div>

        <div className="h-1/5 md:ml-4 ">
          <a href="https://www.pgstats.com/ultimate/player/Kitty%20Summoner?id=S3824793" target="_blank" rel="noopener noreferrer">
            <img src={SmashUltimateIcon} alt="Smash Ultimate" className="w-1/2 h-auto mx-auto enlarge" />
          </a>
          <div className="text-white text-center text-2xl ">
            Smash Ultimate
          </div>
          <div className="text-gray-500 text-center">
            Kitty Summoner
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamingTagPage;
