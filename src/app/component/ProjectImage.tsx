import Image from "next/image";

type Props = {
  src: string;
};

export function ProjectImage({ src }: Props) {
  return (
    <figure className="relative max-md:aspect-square aspect-3/2 order-2 lg:order-1 lg:w-1/2 h-[40vh] max-sm:h-[25vh]">
      <div className="absolute inset-0 bg-yellow-900/10 rounded-md">
        <Image
          src={src}
          objectFit="contain"
          layout="fill"
          className="bg-center bg-no-repeat scale-95"
          alt="mockup"
          priority
          aria-hidden
        />
      </div>
    </figure>
  );
}
