import Image from "next/image";
// Will take you to another page.
import Link from "next/link";
export default function Page() {

  const linkStyles = "hover:underline"
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>

      <ul>
        <li>
          <Link className={linkStyles} href="week-2">Week 2</Link>
        </li>
      </ul>

    </main>
  );
}
