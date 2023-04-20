import BookingBtn from './BookingBtn';

export default function BookingDate() {
  const currentDate = new Date();
  const end = new Date();
  const movieDurationInMinutes = 90;

  end.setHours(23, 0, 0, 0);

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  function addDays(date: Date, days: number) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    const day = newDate.getDate();
    const month = newDate.getMonth();
    const monthName = monthNames[month];
    return `${day} ${monthName}`;
  }

  const dateBtns = [];

  for (let i = 0; i < 12; i++) {
    const label = addDays(currentDate, i);
    const bookingBtn = <BookingBtn key={i} children={label} />;
    dateBtns.push(bookingBtn);
  }

  const timeBtns = [];

  for (let i = 0; currentDate < end; i++) {
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const roundedMinutes =
      Math.floor(minutes / movieDurationInMinutes) * movieDurationInMinutes;
    const label = `${hours.toString().padStart(2, '0')}:${roundedMinutes
      .toString()
      .padStart(2, '0')}`;
    const bookingBtn = <BookingBtn key={i} children={label} />;
    timeBtns.push(bookingBtn);
    currentDate.setMinutes(currentDate.getMinutes() + movieDurationInMinutes);
  }
  return <>{dateBtns}</>;
}
