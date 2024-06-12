import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link href="/tasks">Tasks</Link></li>
        <li><Link href="/goals">Goals</Link></li>
        <li><Link href="/progress">Progress</Link></li>
        <li><Link href="/partners">Partners</Link></li>
      </ul>
    </nav>
  );
}
