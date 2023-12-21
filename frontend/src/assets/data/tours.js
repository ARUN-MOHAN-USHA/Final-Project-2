// import tourImg01 from "../images/tour-img01.jpg";
import tourImg11 from "../images/tour-img11.avif";
import tourImg12 from "../images/tour-img12.avif";
import tourImg13 from "../images/tour-img13.jpg";
import tourImg14 from "../images/tour-img14.jpg";
import tourImg15 from "../images/tour-img15.avif";
import tourImg16 from "../images/tour-img16.avif";
import tourImg17 from "../images/tour-img17.avif";
import tourImg10 from "../images/tour-img10.avif";

//stored in an array
const tours = [
  {
    id: "01",
    title: "Munnar",
    city: "India",
    distance: 300,
    address: "Kerala",
    price: 999,
    maxGroupSize: 10,
    desc: "Munnar is a town and hill station located in the Idukki district of the southwestern Indian state of Kerala. Munnar is situated at around 1,600 metres (5,200 ft) above mean sea level,[4] in the Western Ghats mountain range. Munnar is also called the Kashmir of South India and is a popular honeymoon destination.",
    reviews: [
      {
        name: "Sharan",
        rating: 4.6,
      },
      {
        name: "Suma",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg10,
    featured: true,
  },
  {
    id: "02",
    title: "Phra nang beach, Thailand",
    city: "Krabi",
    distance: 400,
    address: "Thailand",
    price: 5000,
    maxGroupSize: 8,
    desc: "Phra Nang Beach is located in Railay Bay, Krabi, Thailand. It's part of the Phra Nang Peninsula, which also includes Railay Beach and Ton Sai Beach. Railay Beach is known for its limestone cliffs.",
    reviews: [
      {
        name: "Akshay",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg11,
    featured: true,
  },
  {
    id: "03",
    title: "United Kingdom",
    city: "London, UK",
    distance: 500,
    address: "United Kingdom",
    price: 8999,
    maxGroupSize: 8,
    desc: "London, the capital city of England, is one of the world's most visited cities in terms of international visits. It is home to an array of notable tourist attractions, attracting 20.42 million international visitors in 2018, an additional 27.8 million overnighting domestic tourists in 2017, and 280 million day-trippers in 2015.",
    reviews: [
      {
        name: "Akhil",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg12,
    featured: true,
  },
  {
    id: "04",
    title: "Maldives",
    city: "Male",
    distance: 500,
    address: "Male",
    price: 2500,
    maxGroupSize: 8,
    desc: " Maldives is a tropical holiday destination in the Indian Ocean. The stunning islands are very relaxed and offer an experience which can best be described as a getaway on a desert island but with high quality accommodation, spectacular food, excellent service and an extensive range of activities.",
    reviews: [
      {
        name: "Neha",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg13,
    featured: true,
  },
  {
    id: "05",
    title: "Tokyo, Japan",
    city: "Tokyo",
    distance: 550,
    address: "Japan",
    price: 6500,
    maxGroupSize: 8,
    desc: "Architecture and culture cultivated through history and tradition. Tokyo is filled with an array of diverse cultures. Among modern buildings, cutting-edge fashion and animations, there are also traditional cultures and historic architecture alive in our daily lives.",
    
    reviews: [
      {
        name: "Usha",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg14,
    featured: false,
  },
  {
    id: "06",
    title: "Eiffel Tower",
    city: "France",
    distance: 500,
    address: "France",
    price: 17500,
    maxGroupSize: 8,
    desc: "When it comes to natural beauty, France can rival just about any other country on the planet. France's scenery is as diverse as it is beautiful, with the glittering coastlines of the French Riviera, the patchwork fields of the Loire Valley, the snow-capped Alps and centuries old harbor towns of Normandy.",
    reviews: [
      {
        name: "Jobin",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg15,
    featured: false,
  },
  {
    id: "07",
    title: "Milan",
    city: "Italy",
    distance: 500,
    address: "Italy",
    price: 15000,
    maxGroupSize: 8,
    desc: "As well as fashion, Milan also has a prominent design scene. The Milan Furniture Fair is the largest trade fair of its kind, showcasing furniture and design from all around the world. There are also several design districts that you can visit, including Tortona Design District and the Brera Design District.",
    reviews: [
     
    ],
    avgRating: 4.5,
    photo: tourImg16,
    featured: false,
  },
  {
    id: "08",
    title: "Dubai",
    city: "Dubai",
    distance: 500,
    address: "Dubai",
    price: 5000,
    maxGroupSize: 8,
    desc: "With stunning architecture, fancy hotels, shopping festivals, majestic skyscrapers, glittering skylines, and giant shopping malls, Dubai is truly a paradise for scores of tourists from around the world. Known to be one of the most progressive regions in the Middle East region, Dubai has undergone a huge transformation.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg17,
    featured: false,
  },
  // {
  //   id: "09",
  //   title: "Holmen Arun, kerala",
  //   city: "France",
  //   distance: 500,
  //   price: 99,
  //   maxGroupSize: 8,
  //   desc: "this is the description",
  //   reviews: [

  //   ],
  //   avgRating: 4.5,
  //   photo: heroImg02,
  //   featured: false,
  // },
];

export default tours;
