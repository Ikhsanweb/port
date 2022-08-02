import React from 'react'
import images from './images.js'
import icons from './icons.js'

// import {FaAward} from 'react-icons/fa'
// import {FiUsers} from 'react-icons/fi'
// import {VscFolderLibrary} from 'react-icons/vsc'

const posterIsClick = true
const certificateIsClick = true 
const cVIsClick= true
const framesIsClick = true
const logoIsClick = true


const portfolioItems = [
	{
		id: 1,
		click: posterIsClick,
		itemTitle: "Poster",
		itemSubtitle: "Have a good looking Poster ?",
		itemImg: images.POSTERA1,
		itemPath: "poster",
		itemContent: [
			{
				specId: 11,
				imgContent: [
					{
						deepId: 111,
						deepImg: images.POSTERA1,
					},
					{
						deepId: 112,
						deepImg: images.POSTERA2,
					},
				],
				imgText: "Koleksi poster 1",
				fullText: "", 
			},
			{
				specId: 12,
				imgContent: [ 
					{
						deepId: 113,
						deepImg: images.POSTERB1,
					},
				],
				imgText: "Poster National Idea Poster Competition",
				fullText: "", 
			},
			{
				specId: 13,
				imgContent: [
					{
						deepId: 114,
						deepImg: images.POSTERC1,
					},
				],
				imgText: "Poster Writing Youth Competition",
				fullText: "",
			},
		]
	},
	{
		id: 2,
		click: certificateIsClick,
		itemTitle: "Certificate",
		itemSubtitle: "Have a good looking Certificate ?",
		itemImg: images.CERTIFICATEA1,
		itemPath: "certificate",
		itemContent: [
			{
				specId: 21,
				imgContent: [
					{
						deepId: 115,
						deepImg: images.CERTIFICATEA1,
					},
				],
				imgText: "Contoh Model Sertifikat 1",
				fullText: "",
			},
			{
				specId: 22,
				imgContent: [
					{
						deepId: 116,
						deepImg: images.CERTIFICATEB1,
					},
				],
				imgText: "Contoh Model Sertifikat 2",
				fullText: "",
			},
			{
				specId: 23,
				imgContent: [
					{
						deepId: 117,
						deepImg: images.CERTIFICATEC1,
					},
				],
				imgText: "Contoh Model Sertifikat 3",
				fullText: "", 
			},
			{
				specId: 24,
				imgContent: [
					{
						deepId: 118,
						deepImg: images.CERTIFICATED1,
					},
				],
				imgText: "Contoh Model Sertifikat 4",
				fullText: "", 
			},
		]
	},
	{
		id: 3,
		click: framesIsClick,
		itemTitle: "Frames",
		itemSubtitle: "Have a good looking Frames ?",
		itemImg: images.FRAMEA1,
		itemPath: "frame",
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
				imgText: "Koleksi Frame Instagram",
				fullText: "Rangkaian Frame untuk mengelola tampilan instagram", 
			},
		]
	},
	{
		id: 4,
		click: logoIsClick,
		itemTitle: "Logo",
		itemSubtitle: "Have a good looking Logo ?",
		itemImg: images.LOGOA1,
		itemPath: "logo",
		itemContent: [
			{
				specId: 41,
				imgContent: [
					{
						deepId: 124,
						deepImg: images.LOGOA1,
					},
				],
				imgText: "Logo Portfolio",
				fullText: "", 
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
				imgText: "Logo Tahu Kress",
				fullText: "", 
			},
		]
	},
]



const aboutItems = [
	{
		id: 1,
		aboutIcon: <icons.FaAward />,
		aboutTitle: "Experience",
		aboutSubtitle: "1+ Year Working",
	},
	{
		id: 2,
		aboutIcon: <icons.FaAward />,
		aboutTitle: "Certificate",
		aboutSubtitle: "Certified Junior Backend Developer",
	},
]

const expItems = [
	{
		id: 1,
		expItemTitle: "Javascript",
		expItemRank: "Beginner",
	},
	{
		id: 2,
		expItemTitle: "React Js",
		expItemRank: "Beginner",
	},
	{
		id: 3,
		expItemTitle: "React Native",
		expItemRank: "Beginner",
	},
	{
		id: 4,
		expItemTitle: "Responsive Web",
		expItemRank: "Beginner",
	},
	{
		id: 4,
		expItemTitle: "Node Js",
		expItemRank: "Beginner",
	},
]

const socmedItems = [
	{
		id: 1,
		socmedIcon: <icons.FaInstagram className="contact__icon" />,
		socmedName: "ikhsan_personalportfolio",
		socmedLink: "https://www.instagram.com/ikhsan_personalportfolio?r=nametag",
	},
	{
		id: 2,
		socmedIcon: <icons.AiFillGithub className="contact__icon" />,
		socmedName: "ikhsanweb",
		socmedLink: "https://github.com/ikhsanweb",
	},
	{
		id: 3,
		socmedIcon: <icons.AiFillBehanceCircle className="contact__icon" />,
		socmedName: "Ikhsan",
		socmedLink: "https://www.behance.net/muhammadikhsan43",
	}, 
	{
		id: 4,
		socmedIcon: <icons.AiFillLinkedin className="contact__icon" />,
		socmedName: "Muhammad Ikhsan",
		socmedLink: "https://www.linkedin.com/mwlite/in/muhammad-ikhsan-1b2468247",
	},
	{
		id: 5,
		socmedIcon: <icons.FaTwitter className="contact__icon" />,
		socmedName: "ikhsan_portfolio",
		socmedLink: "https://twitter.com/ikhsanPortfolio?t=Yu3YEIS7dl-MiMPtVLXDYg&s=08",
	},
]

const homeContent = [
	{
		id: 1,
		linkTo: `profile`,
		homeContentIcon: <icons.BsPersonFill className="homeContent-Icon" />,
		homeContentLink: "About Me",
	},
	{
		id: 2,
		linkTo: `experience`,
		homeContentIcon: <icons.BsFillArrowUpSquareFill className="homeContent-Icon" />,
		homeContentLink: "Skills",
	},
	{
		id: 3,
		linkTo: `portfolio`,
		homeContentIcon: <icons.VscFolderLibrary className="homeContent-Icon" />,
		homeContentLink: "Portfolio",
	},
	{
		id: 4,
		linkTo: `contact`,
		homeContentIcon: <icons.TiContacts className="homeContent-Icon" />,
		homeContentLink: "Contacts",
	},
]

export default {
	portfolioItems,
	aboutItems,
	expItems,
	socmedItems,
	homeContent,
}