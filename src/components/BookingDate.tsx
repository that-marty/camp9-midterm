import BookingBtn from './BookingBtn';

export default function BookingDate() {
  const currentDate = new Date();

  const MONT_NAMES = [
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

  function addDaysToDay(date: Date, days: number) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    const day = newDate.getDate();
    const month = newDate.getMonth();
    const monthName = MONT_NAMES[month];
    return `${day} ${monthName}`;
  }

  function createBookingButton(label: string) {
    return <BookingBtn key={label} children={label}></BookingBtn>;
  }

  const dateButtons = [];

  for (let i = 0; i < 12; i++) {
    const label = addDaysToDay(currentDate, i);
    const bookingBtn = createBookingButton(label);
    dateButtons.push(bookingBtn);
  }
  return <>{dateButtons}</>;
}
