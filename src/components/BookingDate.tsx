import BookingBtn from './BookingBtn';
import { eachDayOfInterval, add, format } from 'date-fns';

interface Props {
  onSelect: (date: Date) => void;
  selectedDate: Date | null;
}

export default function BookingDate({ onSelect, selectedDate }: Props) {
  const days = eachDayOfInterval({
    start: new Date(),
    end: add(new Date(), { days: 11 }),
  });

  function onClickHandler(date: Date) {
    onSelect(date);
  }

  return (
    <>
      {days.map(date => (
        <BookingBtn
          key={date.toISOString()}
          isSelected={
            selectedDate
              ? selectedDate.toISOString() === date.toISOString()
              : false
          }
          onClick={() => onClickHandler(date)}
        >
          {format(new Date(date), 'dd MMM')}
        </BookingBtn>
      ))}
    </>
  );
}
