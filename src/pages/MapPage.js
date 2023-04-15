import React, { useCallback, useRef } from "react";
import { toPng } from "html-to-image";
import Map from "./Map";
import ".././App.css";
import download from "downloadjs";

function MapPage() {
  const divRef = useRef(null);

  const fileName = "my-th-travel-level.png";

  const downloadJpg = useCallback(() => {
    if (divRef.current === null) {
      return;
    }
    toPng(divRef.current, { cacheBust: true })
      .then((dataUrl) => {
        download(dataUrl, fileName);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [divRef]);

  return (
    <section>
      <section className='Map-container'>
        <section className='Map-padding' ref={divRef}>
          <Map />
        </section>
        <section className='save-image-button' onClick={downloadJpg}>
          Save Image
        </section>
      </section>
    </section>
  );
}

export default MapPage;
