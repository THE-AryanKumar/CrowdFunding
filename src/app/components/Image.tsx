"use client";

import React, { useState } from "react";
import { galleryData } from "../data";
// import { PhotoAlbum } from "react-photo-album";
import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  Counter,
  Fullscreen,
  Captions,
  Thumbnails,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";


const slides = galleryData.images.map(
  ({ original, title, description, width, height }) => ({
    src: original,
    title,
    description,
    width,
    height,
  })
);

const Image = () => {
  const [index, setIndex] = useState<number>(-1);
  const [open, setOpen] = useState(false);

  return (
    <div className="images-container select-none">
      <PhotoAlbum
        onClick={({event, index, photo}) => {
          setIndex(index);
          setOpen(true);
          console.log(index);
        }}
        layout="rows"
        photos={galleryData.images}
      />

      <Lightbox
        plugins={[Captions, Counter, Fullscreen, Thumbnails]}
        captions={{
          showToggle: true,
          descriptionTextAlign: "center",
        }}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </div>
  );
};

export default Image;
