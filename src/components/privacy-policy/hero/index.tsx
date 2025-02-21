const Hero = () => {
  return (
    <section className="text-center dark bg-black/95 text-white/95 rounded-2xl pt-32 md:pb-16 pb-8 px-4 flex flex-col gap-6 items-center">
      <h1 className="text-3xl md:text-6xl font-semibold">
        Your Privacy,
        <br />
        Our{" "}
        <span className="font-dmsansDisplay italic">Commitment</span>
      </h1>
      <p className="font-light text-sm md:text-md">
        We value your privacy. Learn how we collect, use, and protect <br />{" "}
        your data while using our platform.
      </p>
    </section>
  );
};

export default Hero;
