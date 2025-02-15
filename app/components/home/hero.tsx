import { heatherFont } from "../../lib/fonts";
export default function Hero() {
  return (
    <section className="snap-start text-center h-screen">
      <div className="flex flex-col justify-center h-full">
        <h1 className={`mb-8 title ${heatherFont.className}`}>
          Hola soy Matteo,
          <br /> Graphic Designer & Art Director
        </h1>
        <p className="uppercase tracking-[0.2rem] text-sm font-bold max-w-3xl mx-auto leading-7">
          {`creativo con más de 10 años de experiencia especializado en el packaging design y brand design.
  con enfoque y pasion por el mundo de los vinos y aceites. poner texto sobre mis skills: brand guideline,
  food, beverage, ideas creativas.`}
        </p>
      </div>
    </section>
  );
}
