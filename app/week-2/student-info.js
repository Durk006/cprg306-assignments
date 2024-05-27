import Link from 'next/link';

export default function StudentInfo() {

  const linkStyles = "hover:underline"

  return (
    <div>
      <p>Harmanpal Sidhu</p>
      <Link className={linkStyles} href="https://github.com/durk006/cprg306-assignments">https://github.com</Link>
    </div>
  );
}
