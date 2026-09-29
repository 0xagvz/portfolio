import { useEffect, useRef } from "react";
import gsap from "gsap";
import TapeBand from "../components/TapeBand";

function HeroImage({ containerRef }) {
  const imageRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const relX = e.clientX - left;
      const relY = e.clientY - top;

      const movement = -30;
      const x = ((relX - width / 2) / width) * movement + 10;
      const y = ((relY - height / 2) / height) * movement + 10;

      gsap.to(imageRef.current, {
        x,
        y,
        duration: 1,
        ease: "power2.out",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [containerRef]);

  return null;
}

export default function Hero({ containerRef }) {
  return (
    <div
      id="logomask"
      className="hero"
      style={{
        WebkitMaskImage: 'url("/favicon.svg")',
        maskImage: 'url("/favicon.svg")',
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
      }}
    >
      <section id="about">
        <div className="grain" />

        <TapeBand />

        <div className="hero-content">
          <p className="hero-label">Portfolio 2026</p>
          <h1>
            <span className="hero-name">AGUS</span>
            <span className="hero-name-outline">
              DEV
              <em
                style={{
                  fontStyle: "normal",
                  color: "transparent",
                  WebkitTextStroke: "2px #0a0a0a",
                }}
              >
                .
              </em>
            </span>
          </h1>
          <div className="hero-tags">
            <span className="hero-tag filled">Dev</span>
            <span className="hero-tag">Estudiante</span>
            <span className="hero-tag">Programador</span>
          </div>
        </div>

        <HeroImage containerRef={containerRef} />
      </section>
    </div>
  );
}
