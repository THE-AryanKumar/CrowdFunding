import GalleryImg1 from "../app/images/gallery/marrykom.jpg";
import GalleryImg2 from "../app/images/gallery/neerajchopra.jpg";
import GalleryImg3 from "../app/images/gallery/praggnanandhaa.jpg";
import GalleryImg4 from "../app/images/gallery/viswanathan.jpg";
import GalleryImg5 from "../app/images/gallery/sainanehwal.jpg";
import GalleryImg6 from "../app/images/gallery/viratkohli.jpg";
import GalleryImg7 from "../app/images/gallery/dhoni.jpg";
import GalleryImg8 from "../app/images/gallery/PVSindhu.jpg";

import { GrFacebookOption } from "react-icons/gr";
import { IoMdArrowForward } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { title } from "process";

interface galleryData {
  src: string;
  original: string;
  title: string;
  description: string;
  width: number;
  height: number;
}

export const galleryData = {
  title: "Check my gallery:",
  btnText: "View all",
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1.src,
      original: GalleryImg1.src,
      title: 'Marry Kom',
      description: 'She became the first female Indian boxer to win an Olympic medal.',
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg2.src,
      original: GalleryImg2.src,
      title: 'Slides Title Two',
      description: 'slides discription',
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg3.src,
      original: GalleryImg3.src,
      title: 'Slides Title Three',
      description: 'slides discription',
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg4.src,
      original: GalleryImg4.src,
      title: 'Slides Title Four',
      description: 'slides discription',
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg5.src,
      original: GalleryImg5.src,
      title: 'Slides Title Five',
      description: 'slides discription',
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg6.src,
      original: GalleryImg6.src,
      title: 'Slides Title Six',
      description: 'slides discription',
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg7.src,
      original: GalleryImg7.src,
      title: 'Slides Title Seven',
      description: 'slides discription',
      width: 465,
      height: 412,
    },
    {
        src: GalleryImg8.src,
        original: GalleryImg8.src,
        title: 'Slides Title Seven',
        description: 'slides discription',
        width: 465,
        height: 412,
      },
  ],
};

// export const slides = [
//     {
//         src: 'GalleryImg1',
//         title: 'Slides title one',
//         description: 'slide description',
//     },
//     {
//         src: 'GalleryImg2',
//         title: 'Slides title one',
//         description: 'slide description',
//     },
//     {
//         src: 'GalleryImg3',
//         title: 'Slides title one',
//         description: 'slide description',
//     },
//     {
//         src: 'GalleryImg4',
//         title: 'Slides title one',
//         description: 'slide description',
//     },
//     {
//         src: 'GalleryImg5',
//         title: 'Slides title one',
//         description: 'slide description',
//     },
//     {
//         src: 'GalleryImg6',
//         title: 'Slides title one',
//         description: 'slide description',
//     },
//     {
//         src: 'GalleryImg7',
//         title: 'Slides title one',
//         description: 'slide description',
//     }
// ]
