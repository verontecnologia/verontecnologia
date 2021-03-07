import { useState, useRef, useEffect } from 'react';

export default function useIntersection(options: IntersectionObserverInit) {
  const [observerEntry, setEntry] = useState<IntersectionObserverEntry | undefined>();
  const elRef = useRef();

  useEffect(
    () => {
      const observer = new IntersectionObserver(
        (entries) => setEntry(entries[0]),
        options,
      );
      observer.observe(elRef.current);
      return () => observer.disconnect();
    },
    [elRef, observerEntry],
  );
  return {
    observerEntry,
    elRef,
  };
}
