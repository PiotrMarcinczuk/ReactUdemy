export default function TapButton({ children, onSelect, className }) {
  return (
    <li>
      <button className={className} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
