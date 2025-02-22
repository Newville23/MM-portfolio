import Link from "next/link";
import { heatherFont } from "app/lib/fonts";
import Container from "./container";
import Logo from "./logo";
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
    <div className="top-10 fixed w-full z-10">
      <Container>
        <nav
          className="flex flex-row justify-between relative px-0 pb-0 fade md:overflow-hidden scroll-pr-6 md:relative"
          id="nav"
        >
          <div>
            <Link
              href={"/"}
              className={`transition-all uppercase text-5xl ${heatherFont.className}`}
            >
              <Logo />
            </Link>
          </div>
          <div className="flex flex-row space-x-0">
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
      </Container>
    </div>
  );
}
