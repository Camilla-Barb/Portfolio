export default function Home() {
  return (
    <div className="bg-background min-h-screen p-10 pt-20 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <section className="text-coffee flex flex-col justify-start items-start gap-2 text-2xl">
        <div className="inner-content_primary">
          <h1 className="font-bold">Frontend Developer.</h1>
          <p>Camilla Barbieri</p>
        </div>
        <div className="inner-content_secondary pt-10">
          <p className="text-sm">
            I am a Front-end Developer interested in everything that orbits the
            scientific and IT world. Curious and enterprising, I have more than
            two years of experience in developing e-commerce websites.
          </p>
        </div>
        {/* <div className="inner-content_image">
        </div> */}
      </section>
    </div>
  );
}
