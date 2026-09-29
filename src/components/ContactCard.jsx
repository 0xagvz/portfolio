import { FaGithub, FaTwitter, FaReddit } from "react-icons/fa";
import "./css/ContactCard.css";

const ICONS = {
  github: FaGithub,
  twitter: FaTwitter,
  reddit: FaReddit,
};

export default function ContactCard({ label, handle, url, icon }) {
  const Icon = ICONS[icon] ?? FaGithub;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
    >
      <div className="contact-card-top">
        <span className="contact-card-label">{label}</span>
        <Icon className="contact-icon contact-card-icon" size={40} />
      </div>
      <span className="contact-card-handle">{handle}</span>
    </a>
  );
}
