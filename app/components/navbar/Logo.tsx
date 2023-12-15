'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  return (
    <Image
      src="/images/logo.png"
      alt="Logo"
      height={100}
      width={100}
      priority={true}
      loading="eager"
      className="logo hidden md:block cursor-pointer"
    />
  );
};

export default Logo;
