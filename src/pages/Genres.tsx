import React from 'react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';

function Genres() {
  return (
    <div className='mx-5 mt-8 mb-6'>
      <PageHeader children={'Genres'} />
      <Button>Confirm selected Genres</Button>
    </div>
  );
}

export default Genres;
