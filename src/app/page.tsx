import Link from 'next/link';
export default function Page() {
  return (
    <div className='columns-3 gap-10'>
      <h1>Homepage</h1>
      <Link href='/dashboard'>
        <button>log in</button>
      </Link>
    </div>
  );
}
