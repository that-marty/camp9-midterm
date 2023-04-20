type Props = {
  label?: string;
  available: boolean;
};

export default function BookingBtn({ label, available = true }: Props) {
  return (
    <button className="text-white-dimmed focus:text-dark-light focus:bg-yellow rounded text-sm ">
      {label}
    </button>
  );
}
