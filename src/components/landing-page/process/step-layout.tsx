interface PROPS {
  children: React.ReactNode;
  title: string;
  description: string;
}

const StepLayout = ({ children, title, description }: PROPS) => {
  return (
    <div className="w-full flex md:flex-row flex-col md:gap-10 gap-6 items-center">
      {children}
      <div className="md:w-1/2">
        <h3 className="text-2xl font-semibold md:mb-4 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};
export default StepLayout;
