import { Button } from "../../ui/button";

const BookingInput = () => {
  return (
    <div className="flex md:gap-2 bg-neutral-800 border border-white/95 p-px pl-4 rounded-md">
      <input
        className="w-3/4 md:w-auto bg-transparent outline-none placeholder:text-white placeholder:font-light placeholder:text-sm"
        placeholder="Enter your company email"
      />
      <Button>Get a demo</Button>
    </div>
  );
};

export default BookingInput;
