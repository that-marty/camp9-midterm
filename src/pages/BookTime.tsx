import BookingDate from '../components/BookingDate';
import BookingTime from '../components/BookingTime';
import PageHeader from '../components/PageHeader';

export default function BookTime() {
  return (
    <div className="mx-5 my-6">
      <PageHeader children={'Select Date & Time'} />
      <div className="py-6 border-b border-white-dimmed">
        <h2 className="text-sm text-white-dimmed font-bold ml-1">Date</h2>
        <div className="pt-5 grid grid-cols-4 gap-[18px]">
          {<BookingDate />}
        </div>
      </div>
      <div className="py-6 border-opacity-20">
        <h2 className="text-sm text-white-dimmed font-bold ml-1">Time</h2>
        <div className="pt-5 grid grid-cols-4 gap-[18px]">
          {<BookingTime />}
        </div>
      </div>
    </div>
  );
}
