import React, { useEffect, useRef ,useState } from "react";

// import Webcam from "react-webcam";

const videoConstraints = {
  width:540,
  facingMode: "environment",
};

const Camera = () => {
  const WebcamRef = useRef(null);

  const [url, seturl] = useState(null);

  const capturePhoto = React.useCallback(async () => {
    const imageSrc = WebcamRef.current.getScreenshot()

    seturl(imageSrc);
  }, [WebcamRef]);

  const onUserMedia = (e) => {
    console.log(e);
  };
  return (
    <div>
      {/* <Webcam
        ref={WebcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        onUserMedia={onUserMedia}
        mirrored={false}
      /> */}
      <button onclick={capturePhoto}>Capture</button>
      <button onclick={() => seturl(null)}>Refresh</button>

      {url && (
        <div>
          
          <image src={url} alt="screenshot" />
        </div>
      )}
    </div>
  );
};
export default Camera;
