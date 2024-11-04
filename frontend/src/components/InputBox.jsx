export function InputBox({ label, placeholder, onChange }) {
  return (
    <div>
      <div className="py-2 text-sm font-medium text-left">{label}</div>
      <input
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 border rounded outline-none border-slate-200"
      />
    </div>
  );
}
