import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "../components/Navbar";
import { HeroIndex, HeroScroll } from "../components/HeroIndicators";
import Hero from "../secciones/Hero";
import About from "../secciones/About";
import Projects from "../secciones/Projects";
import Stack from "../secciones/Stack";
import Contact from "../secciones/Contact";
import { useActiveSection } from "../hooks/useActiveSection";
import "./Home.css";

export default function Home() {
  const mainRef = useRef(null);
  const { number, name } = useActiveSection();

  useGSAP(
    () => {
      gsap
        .timeline({ delay: 0.15 })
        .from(".tape-band", {
          xPercent: -110,
          duration: 0.75,
          stagger: 0.09,
          ease: "power3.out",
        })
        .from(".hero-label", { y: 22, opacity: 0, duration: 0.35 }, "-=.4")
        .from(
          ".hero-name",
          { y: 80, opacity: 0, duration: 1.1, ease: "power4.out" },
          "-=.3",
        )
        .from(
          ".hero-name-outline",
          { y: 60, opacity: 0, duration: 0.9, ease: "power3.out" },
          "-=.7",
        )
        .from(
          ".hero-tags .hero-tag",
          { y: 20, opacity: 0, stagger: 0.08, duration: 0.5 },
          "-=.3",
        )
        .from(
          ".hero-image",
          { scale: 0.9, opacity: 0, duration: 1.2, ease: "power2.out" },
          0.6,
        )
        .from(
          ".hero-index, .hero-scroll",
          { opacity: 0, duration: 0.7 },
          "-=.4",
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".hero-container",
            end: "+=250%",
            scrub: 1,
            pin: true,
          },
        })
        .fromTo(
          "#logomask",
          {
            maskSize: "clamp(10000vh, 3500%, 0vh)",
            WebkitMaskSize: "clamp(10000vh, 3500%, 0vh)",
            maskPosition: "50% 39%",
            WebkitMaskPosition: "50% 39%",
          },
          {
            maskSize: "clamp(2vh, 25%, 20vh)",
            WebkitMaskSize: "clamp(2vh, 25%, 20vh)",
            maskPosition: "50% 39%",
            WebkitMaskPosition: "50% 39%",
            ease: "power2.out",
            backgroundColor: "#0a0a0a",
            delay: 0.3,
          },
        )
        .to("#logomask", { maskPosition: "50% 20%", duration: 0.05 })
        .to(".aboutme", { opacity: 1, duration: 0.2 })
        .to(
          ".subtitle",
          { opacity: 1, zIndex: 1, duration: 0.1, ease: "power2.out" },
          "<=",
        )
        .to({}, { duration: 0.1 });

      gsap.from("#projects", {
        scrollTrigger: {
          trigger: "#projects",
          start: "top 90%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from("#stack", {
        scrollTrigger: {
          trigger: "#stack",
          start: "top 90%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from("#contact", {
        scrollTrigger: {
          trigger: "#contact",
          start: "top 90%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: mainRef },
  );

  return (
    <div ref={mainRef}>
      <Navbar />

      <HeroIndex number={number} name={name} />
      <HeroScroll />

      <div className="hero-container" style={{ position: "relative" }}>
        <Hero containerRef={mainRef} />
        <About />
      </div>

      <Projects />
      <Stack />
      <Contact />
    </div>
  );
}
