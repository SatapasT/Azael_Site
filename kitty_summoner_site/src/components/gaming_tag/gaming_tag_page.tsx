import { MainGames } from "../../constants/main_game_item";
import { OtherGames } from "../../constants/other_game_item";
interface GameCardProps {
  href?: string;
  icon: string;
  alt: string;
  title: string;
  username: string;
}

const GameCard: React.FC<GameCardProps> = ({ href, icon, alt, title, username }) => (
  <div className="h-1/5 md:ml-4 items-center justify-center">
    {href ? (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt={alt} className="w-1/2 h-auto mx-auto enlarge" />
      </a>
    ) : (
      <img src={icon} alt={alt} className="w-1/2 h-auto mx-auto" />
    )}
    <div className="text-white text-center text-2xl">{title}</div>
    <div className="text-gray-500 text-center">{username}</div>
  </div>
);

const GamingTagPage: React.FC = () => {

  return (
    <div className=" item-container flex items-center justify-center">
      <div className="flex flex-col items-center justify-start w-[80%] min-h-screen pb-10 ">
        <div className="py-2 text-white bg-clip-text lg:text-8xl sm:text-7xl text-6xl font-extrabold text-transparent text-center mt-4">
          Main Games
        </div>
        <div className="py-2 text-white bg-clip-text font-extrabold text-transparent text-center">
          Click on the icon to be directed!
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4 h-1/2 py-8">
          {MainGames.map((game, index) => (
            <div className="p-2 box-border border-2 rounded-lg border-red-600 bg-slate-800 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#8b0000,0_0_15px_#8b0000,0_0_30px_#8b0000]">
              <GameCard key={index} {...game} />
            </div>

          ))}
        </div>
        <div className="text-white lg:text-6xl sm:text-5xl text-4xl lg:py-12 sm:py-8 py-4 font-bold text-center">
          Every Other Games
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-4 h-1/2 py-8">
          {OtherGames.map((game, index) => (
            <div className="p-4 box-border border-2 rounded-lg border-orange-600 bg-slate-900 shadow-[0_0_2px_#fff,inset_0_0_5px_#fff,0_0_8px_#ffa500,0_0_15px_#ffa500,0_0_30px_#ff8c00]">
              <GameCard key={index} {...game} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamingTagPage;
