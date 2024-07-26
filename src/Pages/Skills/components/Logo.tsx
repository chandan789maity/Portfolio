import React from 'react';

interface LogoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt, width, height, className }) => (
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={`text-cyan-700 rounded-xl ${className}`}
  />
);

export default Logo;
