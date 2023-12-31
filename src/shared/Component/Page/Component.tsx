import { ReactNode } from "react";

export default function Page({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}): ReactNode {
  return (
    <section className="container w-full mx-auto px-5 py-2 lg:py-10 " id={id}>
      {children}
    </section>
  );
}
