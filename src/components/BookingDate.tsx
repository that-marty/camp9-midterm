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
    return (
      <BookingBtn key={label} children={label} isSelected={false}></BookingBtn>
    );
  }

  const dateButtons = [];

  for (let i = 0; i < 12; i++) {
    const label = addDaysToDay(currentDate, i);
    const bookingBtn = createBookingButton(label);
    dateButtons.push(bookingBtn);
  }
  return <>{dateButtons}</>;
}

// 1. select one date button at the time. If a second one is selected, the first on is deselected
// 2. if a button is selected, the time buttons become selectable
// 3. select one time button at the time. If a second one is selected, the first on is deselected
// 4. if both date and time buttons are selected, the button selectSeat becomes selectable
