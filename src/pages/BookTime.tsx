import BookingBtn from '../components/BookingBtn';
import PageHeader from '../components/PageHeader';

export default function BookTime() {
  const date = new Date();

  const minutes = date.getMinutes();
  const hours = date.getHours();
  const day = date.getDate();
  const month = date.getMonth();

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

  const montName = monthNames[month];

  const currentDate = `${day} ${montName}`;
  const currentHour = `${hours}:${minutes}`;
  console.log(currentHour);

  return (
    <div className="mx-5 my-6">
      <PageHeader children={'Select Date & Time'} />
      <div className="py-6 border-b border-white-dimmed">
        <h2 className="text-sm text-white-dimmed font-bold ml-1">Date</h2>
        <div className="pt-5 grid grid-cols-4 gap-[18px]">
          <BookingBtn label={currentDate} available={true} />
          <BookingBtn label={`${day + 1} ${montName}`} available={true} />
        </div>
      </div>
      <div className="py-6 border-opacity-20">
        <h2 className="text-sm text-white-dimmed font-bold ml-1">Time</h2>
        <div className="pt-5 grid grid-cols-4 gap-[18px]">
          <BookingBtn label={currentHour} available={true} />
        </div>
      </div>
    </div>
  );
}
