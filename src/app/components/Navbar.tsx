'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-10 mx-auto flex justify-center border-b border-[#33353F] bg-[#121212] bg-opacity-100 align-middle">
      <Link
        href={'/'}
        className="text-2xl font-semibold text-white md:text-5xl"
      >
        <Image
          alt="Logo"
          src="/images/logo.png"
          width={60}
          priority
          height={56}
        />
      </Link>
    </nav>
  );
};

export default Navbar;
