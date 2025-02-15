import Container from "./container";

export default function Footer() {
  return (
    <Container>
      <footer className="fixed bottom-14 max-w-6xl w-full">
        <div className="uppercase tracking-[0.2rem] text-[0.7rem] flex justify-between">
          <p>matteo manini / graphic designer & art director</p>
          <p>portfolio</p>
        </div>
      </footer>
    </Container>
  );
}
