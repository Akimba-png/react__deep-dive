import { useRef, forwardRef, useImperativeHandle } from 'react';

type VideoHandle = {
  customPlay: () => void;
  customPause: () => void;
}

const Video = forwardRef<VideoHandle>(function(_props, ref) {
  const tagRef = useRef<HTMLVideoElement | null>(null);
  useImperativeHandle(ref, () => {
    return {
      customPlay() {
        tagRef.current!.play();
      },
      customPause() {
        tagRef.current!.pause();
      },
    };
  }, [])
  return (
    <video width={340} ref={tagRef}>
      <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4"></source>
    </video>
  );
});

export function UseImperativeHandlePlayer(): JSX.Element {
  const videoRef = useRef<VideoHandle | null>(null);
  const handlePlayClick = () => videoRef.current!.customPlay();
  const handlePauseClick = () => videoRef.current!.customPause();
  return (
    <>
      <h2>useImperativeHandle</h2>
      <Video ref={videoRef}/>
      <button type="button" onClick={handlePlayClick}>play</button>
      <button type="button" onClick={handlePauseClick}>pause</button>
    </>
  );
}
