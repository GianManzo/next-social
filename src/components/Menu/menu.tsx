import Link from "next/link";

export default function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>

      <li>
        <Link href="/imc">Imc</Link>
      </li>
    </ul>
  );
}
