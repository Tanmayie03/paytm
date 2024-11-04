export function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-full text-white bg-green-600 hover:bg-green-700 outline-none font-medium rounded text-sm px-5 py-2.5  mb-2">
      {label}
    </button>
  );
}
