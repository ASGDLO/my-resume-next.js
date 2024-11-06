import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Select Language</h1>
      <div className="mt-4">
        <Link href="/en" className="mr-4">
          English
        </Link>
        <Link href="/ko">
          한국어
        </Link>
      </div>
    </div>
  );
}