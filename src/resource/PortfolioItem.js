import React from 'react';
import images from './images.js';
import icons from './icons.js';

const posterIsClick = true;
const certificateIsClick = true;
const cVIsClick = true;
const framesIsClick = true;
const logoIsClick = true;

const posterDetClick1 = true;
const posterDetClick2 = true;
const posterDetClick3 = true;

const certDetClick1 = true;
const certDetClick2 = true;
const certDetClick3 = true;
const certDetClick4 = true;

const frameDetClick1 = true;

const logoDetClick1 = true;
const logoDetClick2 = true;

const graphicDesignDetClick = true;
const sanshopDetClick = true;
const minimizedInfoGuideDetClick = true;

const portfolioItems = [
  {
    id: 1,
    click: posterIsClick,
    itemTitle: 'Poster',
    itemSubtitle: 'Have a good looking Poster ?',
    itemImg: images.POSTERC1,
    itemPath: 'poster',
    itemContent: [
      {
        specId: 12,
        imgContent: [
          {
            deepId: 113,
            deepImg: images.POSTERB1,
          },
          {
            deepId: 1132,
            deepImg: images.POSTERB2,
          },
          {
            deepId: 1133,
            deepImg: images.POSTERB3,
          },
          {
            deepId: 1134,
            deepImg: images.POSTERB4,
          },
          {
            deepId: 1135,
            deepImg: images.POSTERB5,
          },
        ],
        imgText: 'Poster National Idea Poster Competition',
        clickDet: posterDetClick2,
        fullText: '',
      },
      {
        specId: 13,
        imgContent: [
          {
            deepId: 114,
            deepImg: images.POSTERC1,
          },
          {
            deepId: 1142,
            deepImg: images.POSTERC2,
          },
          {
            deepId: 1143,
            deepImg: images.POSTERC3,
          },
          {
            deepId: 1144,
            deepImg: images.POSTERC4,
          },
          {
            deepId: 1145,
            deepImg: images.POSTERC5,
          },
        ],
        imgText: 'Poster Writing Youth Competition',
        clickDet: posterDetClick3,
        fullText: '',
      },
    ],
  },
  {
    id: 2,
    click: certificateIsClick,
    itemTitle: 'Certificate',
    itemSubtitle: 'Have a good looking Certificate ?',
    itemImg: images.CERTIFICATEA1,
    itemPath: 'certificate',
    itemContent: [
      {
        specId: 21,
        imgContent: [
          {
            deepId: 115,
            deepImg: images.CERTIFICATEA1,
          },
          {
            deepId: 116,
            deepImg: images.CERTIFICATEB1,
          },
          {
            deepId: 117,
            deepImg: images.CERTIFICATEC1,
          },
          {
            deepId: 118,
            deepImg: images.CERTIFICATED1,
          },
        ],
        imgText: 'Contoh Model Sertifikat 1',
        clickDet: certDetClick1,
        fullText: '',
      },
    ],
  },
  {
    id: 3,
    click: framesIsClick,
    itemTitle: 'Frames',
    itemSubtitle: 'Have a good looking Frames ?',
    itemImg: images.FRAMEA1,
    itemPath: 'frame',
    itemContent: [
      {
        specId: 31,
        imgContent: [
          {
            deepId: 119,
            deepImg: images.FRAMEA1,
          },
          {
            deepId: 120,
            deepImg: images.FRAMEA2,
          },
          {
            deepId: 121,
            deepImg: images.FRAMEA3,
          },
          {
            deepId: 122,
            deepImg: images.FRAMEA4,
          },
          {
            deepId: 123,
            deepImg: images.FRAMEA5,
          },
        ],
        imgText: 'Koleksi Frame Instagram',
        clickDet: frameDetClick1,
        fullText: 'Rangkaian Frame untuk mengelola tampilan instagram',
      },
    ],
  },
  {
    id: 4,
    click: logoIsClick,
    itemTitle: 'Logo',
    itemSubtitle: 'Have a good looking Logo ?',
    itemImg: images.LOGOA1,
    itemPath: 'logo',
    itemContent: [
      {
        specId: 41,
        imgContent: [
          {
            deepId: 124,
            deepImg: images.LOGOA1,
          },
        ],
        imgText: 'Logo Portfolio',
        clickDet: logoDetClick1,
        fullText: '',
      },
      {
        specId: 42,
        imgContent: [
          {
            deepId: 125,
            deepImg: images.LOGOB1,
          },
          {
            deepId: 126,
            deepImg: images.LOGOB2,
          },
          {
            deepId: 127,
            deepImg: images.LOGOB3,
          },
        ],
        imgText: 'Logo Tahu Kress',
        clickDet: logoDetClick2,
        fullText: '',
      },
    ],
  },
];

const aboutItems = [
  {
    id: 1,
    aboutIcon: <icons.FaAward />,
    aboutTitle: 'Experience',
    aboutSubtitle: '3+ Year Graphic Design Freelancer',
  },
  {
    id: 2,
    aboutIcon: <icons.FaAward />,
    aboutTitle: 'Certified',
    aboutSubtitle: 'Backend Developer',
  },
  {
    id: 3,
    aboutIcon: <icons.FaAward />,
    aboutTitle: 'Certified',
    aboutSubtitle: 'React Developer',
  },
];

const expItems = [
  {
    id: 1,
    expItemTitle: 'Javascript',
    expIcon: <icons.FaJs className="expIcon" />,
  },
  {
    id: 2,
    expItemTitle: 'React Js',
    expIcon: <icons.FaReact className="expIcon" />,
  },
  // {
  //   id: 3,
  //   expItemTitle: 'React Native',
  //   expIcon: <icons.FaReact className="expIcon" />,
  // },
  {
    id: 4,
    expItemTitle: 'Responsive Web',
    expIcon: <icons.AiFillHtml5 className="expIcon" />,
  },
  {
    id: 5,
    expItemTitle: 'Node Js',
    expIcon: <icons.FaNodeJs className="expIcon" />,
  },
];

const socmedItems = [
  {
    id: 1,
    socmedIcon: <icons.FaInstagram className="contact__icon" />,
    socmedName: 'ikhsan_personalportfolio',
    socmedLink: 'https://www.instagram.com/ikhsan_personalportfolio?r=nametag',
  },
  {
    id: 2,
    socmedIcon: <icons.AiFillGithub className="contact__icon" />,
    socmedName: 'ikhsanweb',
    socmedLink: 'https://github.com/ikhsanweb',
  },
  // {
  // 	id: 3,
  // 	socmedIcon: <icons.AiFillBehanceCircle className="contact__icon" />,
  // 	socmedName: "Ikhsan",
  // 	socmedLink: "https://www.behance.net/muhammadikhsan43",
  // },
  {
    id: 4,
    socmedIcon: <icons.AiFillLinkedin className="contact__icon" />,
    socmedName: 'Muhammad Ikhsan',
    socmedLink: 'https://www.linkedin.com/mwlite/in/muhammad-ikhsan-1b2468247',
  },
  // {
  //   id: 5,
  //   socmedIcon: <icons.FaTwitter className="contact__icon" />,
  //   socmedName: 'ikhsan_portfolio',
  //   socmedLink:
  //     'https://twitter.com/ikhsanPortfolio?t=Yu3YEIS7dl-MiMPtVLXDYg&s=08',
  // },
];

const homeContent = [
  {
    id: 1,
    linkTo: `profile`,
    homeContentIcon: <icons.BsPersonFill className="homeContent-Icon" />,
    homeContentLink: 'About Me',
  },
  // {
  // 	id: 2,
  // 	linkTo: `experience`,
  // 	homeContentIcon: <icons.BsFillArrowUpSquareFill className="homeContent-Icon" />,
  // 	homeContentLink: "Skills",
  // },
  // {
  // 	id: 3,
  // 	linkTo: `portfolio`,
  // 	homeContentIcon: <icons.VscFolderLibrary className="homeContent-Icon" />,
  // 	homeContentLink: "Portfolio",
  // },
  {
    id: 2,
    linkTo: `contact`,
    homeContentIcon: <icons.TiContacts className="homeContent-Icon" />,
    homeContentLink: 'Contacts',
  },
];

const projectItem = [
  {
    id: 1,
    linkTo: `portfolio`,
    img: images.POSTERC1,
    projectName: 'Graphic Design',
    isLink: true,
  },
  {
    id: 2,
    linkTo: `https://determined-cod-pumps.cyclic.app/`,
    img: images.SANSHOP,
    projectName: 'Sanshop (Online Shop)',
    isLink: false,
  },
  {
    id: 3,
    linkTo: `https://miniguideweb.netlify.app`,
    img: images.INFOGUIDE,
    projectName: 'Minimized Info Guide',
    isLink: false,
  },
];

const projectItemAnim = [
  {
    id: 1,
    click: graphicDesignDetClick,
    itemTitle: 'Graphic Design',
    itemSubtitle: 'Graphic Design Catalogue',
    itemImg: images.POSTERC1,
    isSingleLink: true,
    isLink: true,
    singleLink: 'portfolio',
  },
  {
    id: 2,
    click: sanshopDetClick,
    itemTitle: '(Online Shop)',
    itemSubtitle: 'Small Online Shop Prototype',
    itemImg: images.SANSHOP,
    isSingleLink: true,
    isLink: false,
    singleLink: 'https://determined-cod-pumps.cyclic.app/',
  },
  {
    id: 3,
    click: minimizedInfoGuideDetClick,
    itemTitle: 'Minimized Info Guide',
    itemSubtitle: 'Pocket mini info guide',
    itemImg: images.INFOGUIDE,
    isSingleLink: true,
    isLink: false,
    singleLink: 'https://miniguideweb.netlify.app',
  },
];

export default {
  portfolioItems,
  aboutItems,
  expItems,
  socmedItems,
  homeContent,
  projectItem,
  projectItemAnim,
};
