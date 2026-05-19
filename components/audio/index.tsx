import { FC } from "react";

interface AudioProps {
  src: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  preload?: 'auto' | 'metadata' | 'none';
  className?: string;
}

export const Audio:FC<AudioProps> = ({
  src,
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  preload = 'metadata',
  className,
}) => {
  return (
    <audio
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      preload={preload}
      className={className}
    >
      <source src={src} type="audio/mpeg" />
      Ваш браузер не поддерживает аудио элемент.
    </audio>
  );
};