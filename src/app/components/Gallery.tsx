// import React, { useState } from "react";

// import { galleryData } from "../data";

// import { PhotoAlbum } from "react-photo-album";

// import Lightbox from "yet-another-react-lightbox";

// import "yet-another-react-lightbox/styles.css";

// import { motion } from "framer-motion";
// import { Container } from "postcss";

// const slides = galleryData.images.map(({ original, width, height }) => ({
//   src: original,
//   width,
//   height,
// }));

// const Gallery = () => {
//   const [index, setIndex] = useState(-1);
//   const { title, btnText, btnIcon, images } = galleryData;

//   return (
//     <section className="bg-[#f9f9f9] section relative mt-[40px] lg:mt-0">
//       <div className="container mx-auto">
//         <h2 className="h2 max-w-[370px] lg:mb-20">{title}</h2>
//       </div>
//       <div className="mb-8 lg:mb-20">
//         <PhotoAlbum
//           onClick={(event, photo, index) => setIndex(index)}
//           layout="row"
//           photos={images}
//         />
//         <Lightbox
//           slides={slides}
//           styles={{ Container: { backgroundColor: "rgba(0,0,0,.9)" } }}
//           open={index >= 0}
//           index={index}
//           close={() => setIndex(-1)}
//         />
//       </div>
//       <div className="flex justify-center">
//         <button className="btn btn-lg btn-dark">
//           {btnText}
//           <div className="text-xl">{btnIcon}</div>
//         </button>
//       </div> 
//     </section>
//   );
// };

// export default Gallery;
