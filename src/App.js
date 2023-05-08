import { useCallback, useMemo, useState } from "react";
import "./App.css";
import VideoPlayer from "./VideoPlayer";

function App() {
  const [text, setText] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const onPlay = useCallback(() => setIsPlaying(true), []);
  const onPause = useCallback(() => setIsPlaying(false), []);
  const videoData = useMemo(() => {
    return {
      title: "Bunny Movie",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    };
  }, []);

  return (
    <div className="App">
      <div>Video is {isPlaying ? "playing" : "paused"}</div>
      <input
        type="text"
        value={text}
        onChange={(evt) => setText(evt.target.value)}
      />
      <span>{text}</span>
      <VideoPlayer onPlay={onPlay} onPause={onPause} src={videoData} />
    </div>
  );
}

export default App;
