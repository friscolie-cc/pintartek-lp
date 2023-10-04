import { ReactNode } from "react";

export default function Page({ children }: { children: ReactNode }): ReactNode {
  return (
    <section className="container w-full mx-auto px-3 py-10">
      {children}
    </section>
  );
}
