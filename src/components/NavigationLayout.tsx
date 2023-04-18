import React from 'react';
import { Outlet } from 'react-router-dom';

function NavigationLayout() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>Hello</li>
            <li>world</li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default NavigationLayout;
