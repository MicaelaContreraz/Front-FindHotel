import React from "react";
import styles from "./HotelList.module.css";
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const HotelList = () => {
  const hotels = [
    {
      id: 1,
      name: "Hard Rock",
      city: "Cancun",
      country: "Mexico",
      price: "30 usd",
      typeRoom: "Habitacion matrimonial",
      score: 5.5,
      category: 4,
      img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsfGVufDB8fDB8fHww&w=1000&q=80",
    },
    {
      id: 2,
      name: "Hard Rock",
      city: "Cartagena",
      country: "Colombia",
      price: "30 usd",
      typeRoom: "Habitacion matrimonial",
      score: 5.5,
      category: 1,
      img: "https://viajasanandres.com/wp-content/uploads/2019/02/decameron-isleno.jpg",
    },
    {
      id: 3,

      name: "Hard Rock",
      city: "Buenos Aires",
      country: "Argentina",
      price: "30 usd",
      typeRoom: "Habitacion matrimonial",
      score: 5.5,
      category: 5,
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/ca/0c/8b/sp-nh-collection-royal.jpg?w=1200&h=-1&s=1",
    },
    {
      id: 4,

      name: "Hard Rock",
      city: "Lima",
      country: "Peru",
      price: "30 usd",
      typeRoom: "Habitacion matrimonial",
      score: 5.5,
      category: 3,
      img: "https://www.infobae.com/new-resizer/r8gfDonqfwbvJkfGOfoZMKpM7GQ=/1200x900/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/05/30122005/hoteles-lujo-destacada-1.jpg",
    },
    {
      id: 5,

      name: "Hard Rock",
      city: "Paris",
      country: "Francia",
      price: "30 usd",
      typeRoom: "Habitacion matrimonial",
      score: 5.5,
      category: 1,
      img: "https://www.momondo.com.co/himg/62/c0/84/ice-85676218-68620422_3XL-430714.jpg",}
    // },

    // {
    //   id: 6,

    //   name: "Hard Rock",
    //   city: "Tokio",
    //   country: "Japón",
    //   price: "30 usd",
    //   typeRoom: "Habitacion matrimonial",
    //   score: 5.5,
    // // category: 3,
    //   img: "https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2022/05/06/62752986a0b9f.r_1651848957740.0-73-1500-823.jpeg",
    // },

    // {
    //   id: 7,

    //   name: "Hard Rock",
    //   city: "Nueva York",
    //   country: "Estados Unidos",
    //   price: "30 usd",
    //   typeRoom: "Habitacion matrimonial",
    //   score: 5.5,
    // // category: 3,
    //   img: "https://cdn.forbes.com.mx/2020/06/Hoteles-Hilton-1-e1591048643462.jpg",
    // },

    // {
    //   id: 8,

    //   name: "Hard Rock",
    //   city: "Roma",
    //   country: "Italia",
    //   price: "30 usd",
    //   typeRoom: "Habitacion matrimonial",
    //   score: 5.5,
    // // category: 3,
    //   img: "https://www.hotelwyndhambogota.com/wp-content/uploads/2022/03/Fachada-Wyndham-bogota-1.jpg",
    // },

    // {
    //   id: 9,

    //   name: "Hard Rock",
    //   city: "Sídney",
    //   country: "Australia",
    //   price: "30 usd",
    //   typeRoom: "Habitacion matrimonial",
    //   score: 5.5,
    // // category: 3,
    //   img: "https://www.infobae.com/new-resizer/TeqEZeHVjdF1hjS6KPLpdk9cw0g=/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/PSRMPOWYTZC5HHJR5CUVXVVVQU.jpg",
    // },

    // {
    //   id: 10,
    //   name: "Hard Rock",
    //   city: "Cairo",
    //   country: "Egipto",
    //   price: "30 usd",
    //   typeRoom: "Habitacion matrimonial",
    //   score: 5.5,
    // // category: 3,
    //   img: "https://www.infobae.com/new-resizer/aZmX5OQ0IQYdnt_KvQgTCVTP-yM=/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/ERBFSFSFAVGSFOEAEMORNX6YMI.jpg",
    // },

    // {
    //   id: 11,
    //   name: "Hard Rock",
    //   city: "Río de Janeiro",
    //   country: "Brasil",
    //   price: "30 usd",
    //   typeRoom: "Habitacion matrimonial",
    //   score: 5.5,
    // // category: 3,
    //   img: "https://www.momondo.cl/kimg/e5/52/27d748ac-616d91c9-118.jpeg",
    // },

    // {
    //   id: 12,
    //   name: "Hard Rock",
    //   city: "Moscú",
    //   country: "Rusia",
    //   price: "30 usd",
    //   typeRoom: "Habitacion matrimonial",
    //   score: 5.5,
    // category: 3,
    //   img: "https://digital.ihg.com/is/image/ihg/ihgor-member-rate-web-offers-1440x720",
    // },

    // {
    //   id: 13,
    //   name: "Hard Rock",
    //   city: "city del Cabo",
    //   country: "Sudáfrica",
    //   price: "30 usd",
    //   typeRoom: "Habitacion matrimonial",
    //   score: 5.5,
    // category: 3,
    //   img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    // },

    // {
    //   id: 14,
    //   name: "Hard Rock",
    //   city: "Bangkok",
    //   country: "Tailandia",
    //   price: "30 usd",
    //   typeRoom: "Habitacion matrimonial",
    //   score: 5.5,
    // category: 3,
    //   img: "https://realestatemarket.com.mx/images/2022/02-feb/1002/nuevos-hoteles-en-mexico-ok-g.jpg",
    // },

    // {
    //   id: 15,
    //   name: "Hard Rock",
    //   city: "Dubái",
    //   country: "Emiratos Árabes Unidos",
    //   price: "30 usd",
    //   typeRoom: "Habitacion matrimonial",
    //   score: 5.5,
    // category: 3,
    //   img: "https://saposyprincesas.elmundo.es/wp-content/uploads/2020/11/hoteles-de-costa-rica-riu-guanacaste.jpg",
    // },

    // {
    //   id: 16,
    //   city: "Toronto",
    //   name: "Hard Rock",
    //   country: "Canadá",
    //   price: "30 usd",
    //   typeRoom: "Habitacion matrimonial",
    //   score: 5.5,
    // category: 3,
    //   img: "https://cdn.forbes.com.mx/2020/07/hoteles-Grand-Velas-Resorts-e1596047698604.jpg",
    // },
  ];
  return (
  <div className={styles.container}>
  <div className={styles.cardsContainer}>
    <span className={styles.resultsText}>Results Hotels</span>
    {hotels.map((hotel) => (
        <Link key={hotel.id} to={`/detail/${hotel.id}`} className={styles.card}>
          <img
            src={hotel.img}
            alt="hotel image"
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <h1 className={styles.title}>{hotel.name}</h1>
            <div className={styles.location}>
              <h5 className={styles.textCity}>
                {hotel.city}, {hotel.country}
              </h5>
            </div>
            <div className={styles.starIcon}>
              {Array.from({ length: hotel.category }, (_, index) => (
                <FaStar key={index} />
              ))}
            </div>
            <h5 className={styles.text}>{hotel.typeRoom}</h5>
          </div>
        </Link>
      ))}
  </div>
</div>
);
};

export default HotelList;




