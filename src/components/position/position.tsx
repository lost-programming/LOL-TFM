import Image from "next/image";

interface PositionProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Position = ({ src, alt, width, height }: PositionProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
    />
  );
};

export default Position;
