export function Calendar({ selected, onSelect }) {
  return (
    <input
      type="date"
      value={selected.toISOString().split("T")[0]}
      onChange={(e) => onSelect(new Date(e.target.value))}
      className="border rounded px-3 py-2"
    />
  );
}
