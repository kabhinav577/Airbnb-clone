'use client';

import Image from 'next/image';

const Avatar = () => {
  return (
    <Image
      alt="Avatar"
      className="rounded-full"
      src="/images/placeholder.jpg"
      height="30"
      width="30"
    />
  );
};

export default Avatar;
