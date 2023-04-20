import BookingBtn from '../components/BookingBtn';
import PageHeader from '../components/PageHeader';

export default function BookTime() {
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
    const bookingBtn = <BookingBtn key={i} label={label} available={true} />;
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
    const bookingBtn = <BookingBtn key={i} label={label} available={true} />;
    timeBtns.push(bookingBtn);
    currentDate.setMinutes(currentDate.getMinutes() + movieDurationInMinutes);
  }

  return (
    <div className="mx-5 my-6">
      <PageHeader children={'Select Date & Time'} />
      <div className="py-6 border-b border-white-dimmed">
        <h2 className="text-sm text-white-dimmed font-bold ml-1">Date</h2>
        <div className="pt-5 grid grid-cols-4 gap-[18px]">{dateBtns}</div>
      </div>
      <div className="py-6 border-opacity-20">
        <h2 className="text-sm text-white-dimmed font-bold ml-1">Time</h2>
        <div className="pt-5 grid grid-cols-4 gap-[18px]">{timeBtns}</div>
      </div>
    </div>
  );
}
