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
  <div className="h-1/5 md:ml-4">
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
    <div className="flex flex-col items-center justify-start w-full min-h-screen pb-10">
      <div className="py-2 text-white bg-clip-text text-8xl font-extrabold text-transparent text-center mt-4">
        Main Games
      </div>
      <div className="py-2 text-white bg-clip-text font-extrabold text-transparent text-center mt-4">
        Click on the icon to be directed!
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 p-4 h-1/2 py-8">
        {MainGames.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </div>
      <div className="text-white text-3xl mt-8 py-12">Every Other Games</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 p-4 h-1/2 py-8">
        {OtherGames.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </div>
    </div>
  );
};

export default GamingTagPage;
