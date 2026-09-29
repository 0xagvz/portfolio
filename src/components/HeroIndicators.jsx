export function HeroIndex({ number, name }) {
  return <div className="hero-index">{number} / {name}</div>;
}

export function HeroScroll() {
  return (
    <div className="hero-scroll">
      <div className="scroll-line" />
      Scroll
    </div>
  );
}
