import Image from "next/image";

export default function About() {
  return (
    <section className="prefooter-section p-5 border-t border-yellow-950/30">
      <h1 className="text-3xl font-bold">About Me</h1>

      <Image
        src="/img/pie-chart.png"
        width={850}
        height={850}
        className="bg-center bg-no-repeat"
        alt=""
        priority
        aria-hidden
      />
    </section>
  );
}
