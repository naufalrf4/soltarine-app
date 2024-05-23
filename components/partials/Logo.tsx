import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Logo = () => {
    return (
      <Link href="/">
        <Image
          src="/images/soltarine-logo.png"
          alt="logo"
          width={64}
          height={64}
          priority
        />
      </Link>
    );
  };

export default Logo