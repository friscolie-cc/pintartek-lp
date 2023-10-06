import { ReactNode } from "react";
import { Props } from "./Types";

export default function Content({ list, title }: Props): ReactNode {
  return (
    <div className="flex flex-col w-full mx-auto px-5">
      <p className="text-xl font-bold text-white">{title}</p>
      <ul className="pt-5 text-[#FFFFFFBF] w-full">
        {list.map((it, index) => (
          <li key={index}>{it}</li>
        ))}
      </ul>
    </div>
  );
}
