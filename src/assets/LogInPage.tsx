import React from 'react';
import Button from '../components/Button';
import LogInForm from '../components/LogInForm';

function LogInPage() {
  return (
    <div>
      <h1>Welcome to Cine-Scape</h1>
      <p>
        You need to log in to be able to make reservations and add movies to
        your watchlist.
      </p>
      <LogInForm></LogInForm>
      <Button>Log In</Button>
    </div>
  );
}

export default LogInPage;
