import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="w-full px-4 md:px-16">{children}</div>;
}
