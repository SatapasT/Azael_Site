import React, { useState, useEffect } from "react";
import LeagueIcon from '../../assets/images/league_icon.png';
import FinalFantasyIcon from '../../assets/images/final_fantasy_xiv_icon.png';
import SteamIcon from '../../assets/images/steam_icon.png';
import ValorantIcon from '../../assets/images/valorant_icon.png';
import ClashOfClanIcon from '../../assets/images/clash_of_clan_icon.png';
import OverwatchIcon from '../../assets/images/overwatch_icon.png';
import FortniteIcon from '../../assets/images/fortnite_icon.jpg';
import SmashUltimateIcon from '../../assets/images/smash_ultimate_icon.png';
import VRChatIcon from '../../assets/images/VRChat_Icon.png';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center w-full h-screen">
    <svg
      role="status"
      className="w-16 h-16 text-gray-200 animate-spin fill-blue-600"
      viewBox="0 0 100 101"
      fill="none"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
  </div>
);

const GamingTagPage: React.FC = () => {
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
    <div className='flex flex-col items-center justify-start w-full min-h-screen pb-10'> {/* Added pb-10 for padding at the bottom */}
      <div className='py-2 text-white bg-clip-text text-8xl font-extrabold text-transparent text-center mt-4'>
        Main Games
      </div>
      <div className='py-2 text-white bg-clip-text font-extrabold text-transparent text-center mt-4'>
        Click on the icon to be directed!
      </div>
      <div className='flex flex-col md:flex-row items-start justify-center w-full mt-6'>
        <div className='flex flex-col md:flex-row items-center justify-center w-full md:w-1/2'>
          <div className='flex flex-col items-center md:items-start'>
            <div className='py-1 text-white bg-clip-text text-4xl font-extrabold text-transparent text-center md:text-left'>
              League of Legend
            </div>
            <div className='text-gray-500 bg-clip-text text-xl font-extrabold text-transparent text-center md:text-left'>
              @Kitty Summoner#Meow
            </div>
          </div>
          <a href='https://www.op.gg/summoners/euw/Kitty%20Summoner-Meow' target="_blank" rel="noopener noreferrer">
            <img
              src={LeagueIcon}
              title="League Of Legend"
              className='h-48 md:ml-4'
            />
          </a>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mt-4 md:mt-0'>
          <div className='flex flex-col items-center md:items-start'>
            <div className='py-1 text-white bg-clip-text text-4xl font-extrabold text-transparent text-center md:text-left'>
              Final Fantasy XIV
            </div>
            <div className='text-gray-500 bg-clip-text text-xl font-extrabold text-transparent text-center md:text-left'>
              @Kitty Summoner#Pheonix
            </div>
          </div>
          <a href='https://eu.finalfantasyxiv.com/lodestone/character/36651684/' target="_blank" rel="noopener noreferrer">
            <img
              src={FinalFantasyIcon}
              title="Final Fantasy XIV"
              className='h-48 md:ml-4'
            />
          </a>
        </div>
      </div>
      <div className='text-white text-3xl mt-8 py-12'>
        Every Other Games
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 p-4 h-1/2 py-8'>
        <div className="h-1/5 md:ml-4 ">
          <a href='https://vrchat.com/home/user/usr_87bd4764-441e-40d7-ae6c-c82b91165f43' target="_blank" rel="noopener noreferrer">
            <img src={VRChatIcon} alt='Game 1' className='w-1/2 h-auto mx-auto' />
          </a>
          <div className='text-white text-center text-2xl '>
            VRChat
          </div>
          <div className="text-gray-500 text-center">
            Kitty Summoner
          </div>
        </div>
        <div className="h-1/5 md:ml-4 ">
          <a href='https://steamcommunity.com/id/KittySummoner/' target="_blank" rel="noopener noreferrer">
            <img src={SteamIcon} alt='Game 1' className='w-1/2 h-auto mx-auto' />
          </a>
          <div className='text-white text-center text-2xl '>
            Steam
          </div>
          <div className="text-gray-500 text-center">
            Kitty Summoner
          </div>
        </div>

        <div className="h-1/5 md:ml-4 ">
          <a href='https://tracker.gg/valorant/profile/riot/Kitty%20Summoner%23Sugar/overview' target="_blank" rel="noopener noreferrer">
            <img src={ValorantIcon} alt='Game 1' className='w-1/2 h-auto mx-auto' />
          </a>
          <div className='text-white text-center text-2xl '>
            Valorant
          </div>
          <div className="text-gray-500 text-center">
            KittySummonr#Sugar
          </div>
        </div>

        <div className="h-1/5 md:ml-4 ">
          <a href='https://www.clashofstats.com/players/gentlemen-gnar-9LPPQJCG/army#tabs' target="_blank" rel="noopener noreferrer">
            <img src={ClashOfClanIcon} alt='Game 1' className='w-1/2 h-auto mx-auto' />
          </a>
          <div className='text-white text-center text-2xl '>
            Clash of Clan
          </div>
          <div className="text-gray-500 text-center">
            Gentlemen Gnar#9LPPQJCG
          </div>
        </div>

        <div className="h-1/5 md:ml-4 ">
          <a>
            <img src={OverwatchIcon} alt='Game 1' className='w-1/2 h-auto mx-auto' />
          </a>
          <div className='text-white text-center text-2xl '>
            Overwatch
          </div>
          <div className="text-gray-500 text-center">
            KittySummonr#11449
          </div>
        </div>

        <div className="h-1/5 md:ml-4 ">
          <a href='https://fortnitetracker.com/profile/all/Kitty%20Summoner' target="_blank" rel="noopener noreferrer">
            <img src={FortniteIcon} alt='Game 1' className='w-1/2 h-auto mx-auto' />
          </a>
          <div className='text-white text-center text-2xl '>
            Fortnite
          </div>
          <div className="text-gray-500 text-center">
            Kitty Summoner
          </div>
        </div>

        <div className="h-1/5 md:ml-4 ">
          <a href='https://www.pgstats.com/ultimate/player/Kitty%20Summoner?id=S3824793' target="_blank" rel="noopener noreferrer">
            <img src={SmashUltimateIcon} alt='Game 1' className='w-1/2 h-auto mx-auto' />
          </a>
          <div className='text-white text-center text-2xl '>
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
