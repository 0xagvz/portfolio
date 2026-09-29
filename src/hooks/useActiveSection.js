import { useEffect, useState } from "react";
import { SECTIONS } from "../data/contenido";

/**
 * Detecta la sección visible por scroll.
 * Retorna { activeId, number, name } para Navbar + indicadores del Hero.
 */
export function useActiveSection(sectionList = SECTIONS) {
  const [activeId, setActiveId] = useState(sectionList[0]);

  useEffect(() => {
    const handleScroll = () => {
      let current = sectionList[0];
      for (let i = sectionList.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionList[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            current = sectionList[i];
            break;
          }
        }
      }
      setActiveId((prev) => (prev === current ? prev : current));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionList]);

  const index = sectionList.indexOf(activeId);

  return {
    activeId,
    number: String(index + 1).padStart(2, "0"),
    name: activeId.toUpperCase(),
  };
}
