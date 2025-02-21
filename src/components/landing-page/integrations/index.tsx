import Image from "next/image";

const Intergrations = () => {
  return (
    <section className="flex flex-col items-center gap-10 md:py-20 py-10">
      <h2 className="text-2xl md:text-4xl font-semibold">
        Seamless <span className="text-accent-700">Integration</span>
      </h2>
      <div className="grid grid-cols-4 md:gap-10 gap-8 px-8">
        <Image
          src="/images/survey-monkey.png"
          alt="survey-monkey"
          width={60}
          height={60}
        />
        <Image src="/images/clickUp.png" alt="clickUp" width={60} height={60} />
        <Image src="/images/slack.png" alt="slack" width={60} height={60} />
        <Image
          src="/images/mailChimp.png"
          alt="mailChimp"
          width={60}
          height={60}
        />
        <Image src="/images/hubSpot.png" alt="hubSpot" width={60} height={60} />
        <Image src="/images/notion.png" alt="notion" width={60} height={60} />
        <Image src="/images/asana.png" alt="asana" width={60} height={60} />
        <Image src="/images/dropbox.png" alt="dropbox" width={60} height={60} />
      </div>
    </section>
  );
};
export default Intergrations;
