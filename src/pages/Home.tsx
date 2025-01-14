import SearchBar from '../components/Searchbar';
import UpcomingMovies from '../components/UpcomingMovies';
import GenreFavorites from '../components/genre/GenreFavorites';

function Home() {
  return (
    <section className='mx-5 mt-8'>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-5">
          <h3 className="typography-secondary">Welcome [User] 👋</h3>
          <p className='typography-primary text-white'>Let's relax and watch a movie!</p>
        </div>
        <div className='h-10 aspect-square rounded-full bg-blue-400'></div>
      </div>
      <div className='mt-7'>
        <SearchBar />
      </div>
      <div className='mt-7 -mx-5'>
        <GenreFavorites />
      </div>
      <div className='mt-2'>
        <UpcomingMovies />
      </div>
    </section>
  );
}

export default Home;
