import React from 'react';
import Button from '../components/Button';
import PageHeader from '../components/PageHeader';

function MovieDetails() {
  return (
    <>
      <PageHeader children={'Movie Detail'} />
      <Button className="typography-primary">Get Reservation</Button>
    </>
  );
}

export default MovieDetails;