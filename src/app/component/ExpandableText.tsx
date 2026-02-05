import { useState } from "react";

type Props = {
  title: string;
  text: string;
};

export function ExpandableText({ title, text }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <article className="flex flex-col order-1 lg:order-1 lg:w-1/2 justify-start text-center md:p-10 w-full">
      <h3 className="font-bold pb-8">{title}</h3>
      <p className={!open ? "ellipsis mb-2" : "showAll mb-2"}>{text}</p>

      <button className="showMoreBtn" onClick={() => setOpen(!open)}>
        {open ? "Show less" : "Show more"}
      </button>
    </article>
  );
}
