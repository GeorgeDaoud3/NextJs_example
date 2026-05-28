"use client"; // Required to use hooks in the App Router

import React from 'react';
import { usePathname } from 'next/navigation';

export default function DynamicPage() {
  const pathname = usePathname(); // Replaces router.asPath

  return (
    <div>
      This is Dynamic Page, accessed from the route <b>{pathname}</b>
    </div>
  );
}