import { heatherFont } from "./lib/fonts";

export default function Page() {
  return (
    <section  className="text-center">
      <h1 className={`mb-8 text-8xl leading-[1.2] font-medium uppercase tracking-[0.4rem] ${heatherFont.className}`}>Hola soy Matteo,<br/> Graphic Designer & Art Director</h1>
      <p className="mb-4 uppercase tracking-[0.2rem] text-sm font-bold max-w-3xl mx-auto leading-7">
        {`creativo con más de 10 años de experiencia especializado en el packaging design y brand design.
        con enfoque y pasion por el mundo de los vinos y aceites. poner texto sobre mis skills: brand guideline,
         food, beverage, ideas creativas.`}
      </p>
    </section>
  );
}
