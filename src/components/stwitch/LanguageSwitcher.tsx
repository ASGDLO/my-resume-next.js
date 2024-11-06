"use client";

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    if (pathname.startsWith('/en')) {
      const newPath = pathname.replace('/en', '/ko');
      router.push(newPath);
    } else {
      const newPath = pathname.replace('/ko', '/en');
      router.push(newPath);
    }
  };

  const isEnglish = pathname.startsWith('/en');

  return (
    <Button onClick={toggleLanguage}>
      {isEnglish ? '한국어' : 'English'}
    </Button>
  );
};

export default LanguageSwitcher;