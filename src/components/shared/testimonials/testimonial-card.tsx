import Image from "next/image";

type AUTHOR = {
  name: string;
  profile: string;
  company: string;
};

interface PROPS {
  text: string;
  author: AUTHOR;
}

const TestimonialCard = ({ text, author }: PROPS) => {
  return (
    <div className="md:w-[400px] bg-gray-100 p-8 rounded-xl flex flex-col items-center gap-4">
      <h4 className="font-medium text-center text-sm">{text}</h4>
      <div className="flex gap-2 text-start">
        <Image
          src={author.profile}
          alt={author.name}
          width={30}
          height={30}
          className="w-8 h-8"
        />
        <span>
          <p className="font-medium text-sm">{author.name}</p>
          <p className="text-gray-400 text-xs">{author.company}</p>
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard;
