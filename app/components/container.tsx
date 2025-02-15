import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="max-w-6xl mx-auto w-full">{children}</div>;
}
