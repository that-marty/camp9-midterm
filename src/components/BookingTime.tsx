import BookingBtn from './BookingBtn';

export default function BookingTime() {
  const currentDate = new Date();
  const END_HOUR = new Date();
  const MOVIE_DURATION_IN_MINUTES = 95;

  END_HOUR.setHours(23, 0, 0, 0);

  function roundToNearest30(date = new Date()) {
    const minutes = 30;
    const ms = 1000 * 60 * minutes;
    return new Date(Math.ceil(date.getTime() / ms) * ms);
  }

  const nextMovieStart = new Date(
    currentDate.getTime() + MOVIE_DURATION_IN_MINUTES * 60000
  );

  const newTime = roundToNearest30(nextMovieStart);

  const hour = newTime.getHours();
  const minutes = newTime.getMinutes().toString().padStart(2, '0');

  const fullDate = `${hour}:${minutes}`;

  return <BookingBtn key={`label`} children={fullDate} isSelected={false}></BookingBtn>;
}
