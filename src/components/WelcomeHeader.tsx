import React from 'react';

export default function WelcomeHeader() {
  return (
    <header className="mx-5 mt-8 flex justify-between">
      <div className="flex flex-col justify-between">
        <h3>Welcome Dan👋</h3>
        <h1>Let's relax and watch a movie!</h1>
      </div>
      <a>
        <img src="../assets/Avatar.png"></img>
      </a>
    </header>
  );
}
