import StackCard from "../components/StackCard";
import { STACK_LIST } from "../data/contenido";

export default function Stack() {
  return (
    <section id="stack" className="section-container">
      <div className="box projects">
        <h1 className="subtitle">Stack</h1>
        <div className="stack-grid">
          {STACK_LIST.map((category, index) => (
            <StackCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
