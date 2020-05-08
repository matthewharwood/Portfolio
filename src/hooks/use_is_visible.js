import {useRef, useEffect, useState} from 'preact/hooks';

const useIsVisible = (options) => {
  const ref = useRef(null);
  const [inView, setView] = useState(false);
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setView(true);
      return;
    }
    const observer = new IntersectionObserver(obsCb, options);
    observer.observe(ref.current);

    function obsCb(entries) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(ref.current);
        setView(true);
      });
    }
  }, [options]);


  return [ref, inView];
}

export {
  useIsVisible,
}