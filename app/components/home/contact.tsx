import { heatherFont } from "../../lib/fonts";

export default function Contact() {
  return (
    <section className="snap-start text-center h-screen">
      <div className="flex flex-col justify-center h-full">
        <h2 className={`mb-8 title ${heatherFont.className}`}>contact</h2>
        <div className="uppercase tracking-[0.2rem] text-sm font-bold leading-7">
          <p>matteo manini</p>
          <p>córdoba (españa)</p>
          <p>+34 643 330 687</p>
          <p>MTTMANINI@GMAIL.COM</p>
        </div>
      </div>
    </section>
  );
}
