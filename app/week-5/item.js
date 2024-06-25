export default function Item({ name, quantity, category }) {
  return (
    <section>
      <li className="bg-slate-800 rounded-md p-2 m-3 ml-8 text-stone-50 w-96">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm">
          Buy {quantity} in {category}{' '}
        </p>
      </li>
    </section>
  );
}
