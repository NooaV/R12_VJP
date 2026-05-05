import './faktatieto.css';

export default function FaktaTieto({
  title,
  content,
  src,
  imgPos = 'right',
}) {
  return (
    <div className="fakta">
      {imgPos === 'left' && src && (
        <div className="fakta-kuva">
          <img src={src} alt={title} />
        </div>
      )}

      <div className="fakta-text">
        <h2 className="fakta-title">{title}</h2>
        <div className="fakta-body">{content}</div>
      </div>

      {imgPos === 'right' && src && (
        <div className="fakta-kuva">
          <img src={src} alt={title} />
        </div>
      )}
    </div>
  );
}