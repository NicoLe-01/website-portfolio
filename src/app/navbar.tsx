import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul className="flex justify-between items-center px-7 py-5 bg-[#e6e6e6]">
          <li>
            <Link href="/">Home</Link>
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
