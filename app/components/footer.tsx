import Container from "./container";

export default function Footer() {
  return (
    <footer className="fixed bottom-14 w-full">
      <Container>
        <div className="uppercase tracking-[0.2rem] text-[0.7rem] flex justify-between">
          <p>matteo manini / graphic designer & art director</p>
          <p>portfolio</p>
        </div>
      </Container>
    </footer>
  );
}
