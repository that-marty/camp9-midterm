import React from 'react';
import NavigationLayout from '../components/NavigationLayout';
import PaginationButtons from '../components/PaginationButtons';
import PaginationMovies from '../components/PaginationMovies';
import { useState } from 'react';

function Movies() {
  const [state, setState] = useState(1);

  return (
    <>
      <PaginationMovies state={state} setState={setState} />
      <PaginationButtons state={state} setState={setState} />
      <NavigationLayout></NavigationLayout>
    </>
  );
}

export default Movies;
