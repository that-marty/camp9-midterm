import NavigationLayout from '../components/NavigationLayout';
import UpcomingMovies from '../components/UpcomingMovies';

function Home() {
  return (
    <div className=''>
      <UpcomingMovies />
      <NavigationLayout />
    </div>
  );
}

export default Home;
