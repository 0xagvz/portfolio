import ContactCard from "../components/ContactCard";
import { CONTACTS } from "../data/contenido";

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <div className="box projects">
        <h1 className="subtitle">Redes</h1>
        <div className="contact-grid">
          {CONTACTS.map((contact) => (
            <ContactCard key={contact.id} {...contact} />
          ))}
        </div>
      </div>
    </section>
  );
}
