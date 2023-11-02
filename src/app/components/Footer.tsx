'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer z-10 mt-[10rem] flex items-center justify-center border border-l-transparent border-r-transparent border-t-[#33353F] text-white">
      <div className="container flex w-full flex-col items-center justify-between py-4 sm:flex-row">
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

        <p className="flex items-center text-slate-400">
          © 2023 Chatzy All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
