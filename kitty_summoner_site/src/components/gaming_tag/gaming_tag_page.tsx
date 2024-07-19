import React from "react";
import LeagueIcon from '../../assets/images/league_icon.png';
import FinalFantasyIcon from '../../assets/images/final_fantasy_xiv_icon.png';
import SteamIcon from '../../assets/images/steam_icon.png';
import ValorantIcon from '../../assets/images/valorant_icon.png';
import ClashOfClanIcon from '../../assets/images/clash_of_clan_icon.png'
import OverwatchIcon from '../../assets/images/overwatch_icon.png'
import FortniteIcon from '../../assets/images/fortnite_icon.jpg'
import SmashUltimateIcon from '../../assets/images/smash_ultimate_icon.png'
import VRChatIcon from '../../assets/images/VRChat_Icon.png'


const GamingTagPage: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-start w-full h-screen'>
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
          <a href='https://eu.finalfantasyxiv.com/lodestone/my/' target="_blank" rel="noopener noreferrer">
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
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 p-4 h-1/2 '>
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
