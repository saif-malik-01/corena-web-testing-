const Hero = () => {
  return (
    <section className="text-center dark bg-black/95 text-white/95 rounded-2xl pt-32 md:pb-16 pb-4 px-4 flex flex-col gap-6 items-center">
      <h1 className="text-3xl md:text-6xl font-semibold">
        Your Agreement with
        <br />
        <span className="font-dmsansDisplay italic">Corena AI</span>
      </h1>
      <p className="font-light text-sm md:text-md">
        By using our platform, you agree to these terms. <br/> Please read carefully
        to understand your rights and responsibilities.
      </p>
    </section>
  );
};

export default Hero;
