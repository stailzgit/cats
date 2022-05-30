import { MutableRefObject, useEffect, useRef } from "react";

export const useObserver = (
  ref: any,
  canLoad: boolean,
  isLoading: boolean,
  callback: Function
) => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    var cb = function (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };

    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);
  }, [isLoading]);
};

// import { useEffect, useRef } from "react";

// export const useObserver = (ref, canLoad, isLoading, callback) => {
//   const observer = useRef(null);

//   useEffect(() => {
//     if (isLoading) return;
//     if (observer.current) observer?.current.disconnect();

//     var cb = function (entries) {
//       if (entries[0].isIntersecting && canLoad) {
//         callback();
//       }
//     };
//     observer.current = new IntersectionObserver(cb);
//     observer.current.observe(ref.current);
//   }, [isLoading]);
// };
