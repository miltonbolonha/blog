import React, { useState, useEffect } from "react";
import Image from "next/image";

const LoadMime = ({
  mp4,
  gif,
  jpg,
  alt,
  className,
  delaySec,
  width,
  height,
  quality,
}) => {
  const [gifState, setGifState] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setGifState(true);
    }, delaySec * 1000);

    return () => clearTimeout(timeout);
  }, [gifState, delaySec]);

  if (!gifState) return null;

  return (
    <>
      {gifState && jpg ? (
        <Image
          src={jpg}
          alt={alt}
          width={width}
          quality={quality}
          height={height}
          className={className}
        />
      ) : null}
      {gifState && mp4 ? (
        <video
          src={mp4}
          autoPlay
          muted
          loop
          width={width}
          height={height}
          controls={false}
          className={className}
        />
      ) : null}

      {gifState && gif ? (
        <Image
          src={gif}
          alt={alt}
          width={width}
          height={height}
          className={className}
          priority={false}
        />
      ) : null}
    </>
  );
};
export default LoadMime;
