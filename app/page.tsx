import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link
        href={{
          pathname: '/blog/[slug]',
          query: { slug: 'my-post' },
        }}
      >
        Hyperlink
      </Link>
    </div>
  );
}
