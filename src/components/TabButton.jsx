export default function TabButton({ children, onSelect, isSelected }) {
  console.log('APP COMPONENT RENDERING');
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
