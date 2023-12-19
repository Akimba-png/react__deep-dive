import { useRef, forwardRef } from 'react';

const Video = forwardRef<HTMLVideoElement>(function(_props, ref) {
  return (
    <video ref={ref} width={340}>
      <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4"></source>
    </video>
  );
});

export function ForwardRefPlayer(): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const handlePlayClick = () => videoRef.current?.play();
  const handlePauseClick = () => videoRef.current!.pause();
  return (
    <>
      <h2>It's a simple video player</h2>
      <Video ref={videoRef}/>
      <button type='button' onClick={handlePlayClick}>play</button>
      <button type='button' onClick={handlePauseClick}>pause</button>
    </>
  );
}

// Важно понимать, что данный пример взаимодействие с media-ресурсом
// является упрощённым
// В реальных случаях, прежде чем взаимодействовать с медиа-элементом,
// следует дождаться загрузки его контента, и использовать для этого useEffect,
// в котором будет добавляться обработчик события onload, по наступлению
// которго будет изменяться флаг isLoading
