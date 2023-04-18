import { useState } from 'react';
import Button from '../components/Button';
import LogInForm from '../components/LogInForm';
import { Link } from 'react-router-dom';

function LogInPage() {
  const [paths, setPaths] = useState('/login');

  return (
    <div className="mx-5 my-8 h-screen relative">
      <h1 className="typography-title">Welcome to Cine-Scape</h1>
      <p className="typography-body mt-3 mb-8">
        You need to log in to be able to make reservations and add movies to
        your watchlist.
      </p>
      <LogInForm></LogInForm>
      <Link to="/" className="absolute bottom-20 right-0 w-full">
        <Button className="typography-primary">Login</Button>
      </Link>
    </div>
  );
}

export default LogInPage;
