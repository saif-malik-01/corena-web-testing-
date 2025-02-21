import { ChartNoAxesColumn, PhoneMissed, UserX } from "lucide-react";
import ProblemCard from "./problem-card";

const Problems = () => {
  return (
    <section className="flex flex-col items-center gap-10 md:py-20 py-10">
      <h2 className="text-2xl md:text-4xl font-semibold">
        Struggling to get <span className="text-accent-700">Results</span> from
        outreach? Here's Why
      </h2>
      <div className="flex md:flex-row flex-col gap-4">
        <ProblemCard
          Icon={UserX}
          title="Wasted effort on the wrong prospects"
          description="Without precise targeting, outreach efforts often fall flat, leading to low conversion rates and lost opportunities."
        />
        <ProblemCard
          Icon={PhoneMissed}
          title="Silent responses & missed follow-ups"
          description="Messages get ignored, and without an automated follow-up system, valuable leads slip away unnoticed."
        />
        <ProblemCard
          Icon={ChartNoAxesColumn}
          title="No clear data to improve strategy"
          description="Without real-time insights, refining outreach becomes a guessing game, making it impossible to scale effectively."
        />
      </div>
    </section>
  );
};

export default Problems;
