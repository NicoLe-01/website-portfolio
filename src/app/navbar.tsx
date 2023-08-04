import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul className="flex justify-between items-center mx-5 my-3">
          <li>
            <Link href="/">Nico</Link>
          </li>
          <ul className="flex justify-center items-center gap-10">
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Experience</Link>
            </li>
            <li>
              <Link href="/">Project</Link>
            </li>
          </ul>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
