import Card from "./component/Card";
import {
  TvIcon,
  BookOpenIcon,
  LightBulbIcon,
  CheckCircleIcon,
} from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <div className="bg-white text-coffee font-[family-name:var(--font-geist-sans)]">
      <section className="hero-section p-12 pt-20 pb-20 gap-16 sm:p-20">
        <article className="flex flex-col justify-start items-start gap-2 text-2xl">
          <div className="hero-text-container relative before:content-[''] before:block before:w-1/3 before:h-[5px] before:bg-coffee before:mb-2">
            <h1 className="font-bold">Frontend Developer.</h1>
            <p>Camilla Barbieri</p>
          </div>
          <div className="inner-content_secondary pt-10">
            <p className="text-sm">
              I am a Front-end Developer interested in everything that orbits
              the scientific and IT world. Curious and enterprising, I have more
              than two years of experience in developing e-commerce websites.
            </p>
          </div>
        </article>
      </section>
      <section className="flex flex-col justify-start items-start gap-2 text-2xl pt-5">
        <div className="section-container p-12 w-full">
          <h2>Skills</h2>

          <ul className="cards-container flex flex-col lg:flex-row gap-6 p-6">
            <Card
              title="Strategy"
              icon={<LightBulbIcon width={40} height={40} />}
            />
            <Card
              title="Study"
              icon={<BookOpenIcon width={40} height={40} />}
            />
            <Card
              title="Development"
              icon={<TvIcon width={40} height={40} />}
            />
            <Card
              title="Accessibility"
              icon={<CheckCircleIcon width={40} height={40} />}
            />
          </ul>
        </div>
        {/* <div className="inner-content_image">
        </div> */}
      </section>
    </div>
  );
}
