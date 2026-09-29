import { TAPE_CONTENT } from "../data/contenido";

export default function TapeBand() {
  return (
    <div className="tape-band">
      <div className="tape-track">
        <span className="tape-text">{TAPE_CONTENT}</span>
        <span className="tape-text" aria-hidden="true">{TAPE_CONTENT}</span>
      </div>
    </div>
  );
}
