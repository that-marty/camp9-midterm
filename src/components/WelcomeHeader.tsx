import Avatar from '../assets/Avatar.png';
import { Link } from 'react-router-dom';

export default function WelcomeHeader() {
  return (
    <header className="mx-5 mt-8 flex justify-between bg-[#1C1C27]">
      <div className="flex flex-col justify-between">
        <h3 className="font-sans font-bold text-xs text-white opacity-40">
          Welcome Dan👋
        </h3>
        <h1 className="text-white font-bold text-sm">
          Let's relax and watch a movie!
        </h1>
      </div>
      <Link to="/">
        <img alt="avatar" src={Avatar}></img>
      </Link>
    </header>
  );
}
