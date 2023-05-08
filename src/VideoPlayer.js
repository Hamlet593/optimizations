import { memo, useRef } from "react";

function VideoPlayer({ src, onPlay, onPause }) {
  const videoRef = useRef();
  const countRef = useRef(0);
  countRef.current++;

  return (
    <div>
      <p>Call count rendered {countRef.current}</p>
      <h2>{src.title}</h2>
      <video src={src.url} ref={videoRef} />
      <button
        onClick={() => {
          videoRef.current.play();
          onPlay();
        }}
      >
        Play
      </button>
      <button
        onClick={() => {
          onPause();
          videoRef.current.pause();
        }}
      >
        Pause
      </button>
    </div>
  );
}

export default memo(VideoPlayer, (prevProps, nextProps) => {
  if (prevProps.onPlay !== nextProps.onPlay) return false;
  if (prevProps.onPause !== nextProps.onPause) return false;
  if (prevProps.src.title !== nextProps.src.title) return false;
  if (prevProps.src.url !== nextProps.src.url) return false;
  return true;
});
