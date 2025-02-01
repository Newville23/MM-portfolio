import Link from "next/link";
import { heatherFont } from "app/lib/fonts";
const navItems = {
  "/": {
    name: "work",
  },
  "/blog": {
    name: "contact",
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row justify-between relative px-0 pb-0 fade md:overflow-hidden scroll-pr-6 md:relative"
          id="nav"
        >
          <div>
            <Link href={"/"} className={`transition-all uppercase text-5xl ${heatherFont.className}`}>
              M
            </Link>
          </div>
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 uppercase tracking-[0.2rem] text-sm flex align-middle relative py-1 px-2 first:mr-14 font-extrabold"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
