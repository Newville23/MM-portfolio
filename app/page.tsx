import Container from "./components/container";
import { heatherFont } from "./lib/fonts";

export default function Page() {
  return (
    <div className="max-h-screen overflow-y-scroll snap-y snap-mandatory">
      <Container>
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
      </Container>
    </div>
  );
}
