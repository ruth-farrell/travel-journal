import { useEffect, useMemo, useState, type ImgHTMLAttributes } from "react";

const FALLBACK_IMAGES = [
  `${process.env.PUBLIC_URL}/images/fallbacks/travel-fallback-1.svg`,
  `${process.env.PUBLIC_URL}/images/fallbacks/travel-fallback-2.svg`,
  `${process.env.PUBLIC_URL}/images/fallbacks/travel-fallback-3.svg`,
];

type FallbackImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
};

export default function FallbackImage({ src, onError, alt = "", ...props }: FallbackImageProps) {
  const randomFallback = useMemo(() => {
    return FALLBACK_IMAGES[Math.floor(Math.random() * FALLBACK_IMAGES.length)];
  }, []);

  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasFallenBack, setHasFallenBack] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setHasFallenBack(false);
  }, [src]);

  const handleError: ImgHTMLAttributes<HTMLImageElement>["onError"] = (event) => {
    if (!hasFallenBack) {
      setCurrentSrc(randomFallback);
      setHasFallenBack(true);
    }

    onError?.(event);
  };

  return <img {...props} alt={alt} src={currentSrc} onError={handleError} />;
}
