'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import LoadingIndicator from '../ui/LoadingIndicator';

export default function RouteLoadingHandler() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 300); // Simulated loading delay (adjust as needed)

    return () => clearTimeout(timeout);
  }, [pathname]);

  return loading ? <LoadingIndicator /> : null;
}
