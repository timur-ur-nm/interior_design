// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styles from "./Portfolio.module.css";

// import portfolio1 from "../../../assets/portfolio-1.jpg";
// import portfolio2 from "../../../assets/portfolio-2.jpg";
// import portfolio3 from "../../../assets/portfolio-3.jpg";
// import portfolio4 from "../../../assets/portfolio-4.jpg";

// const images = [portfolio1, portfolio2, portfolio3, portfolio4];

// const settings = {
//   dots: false,
//   arrows: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1, // "slides" во множественном числе
//   slidesToScroll: 1, // "scroll" с одним "l"
//   autoplay: true,
//   autoplaySpeed: 1000,
// };

// export default function Portfolio() {
//   return (
//     <section className={`${styles.portfolio} mt-16`} id="portfolio">
//       <div className="container mx-auto ">
//         <h1 className="text-center font-ligt lg:text-[45px] lg:pb-10  ">Портфолио</h1>
//         <Slider {...settings}>
//           {images.map((src, idx) => {
//             return (
//               <div key={idx}>
//                 <img
//                   src={src}
//                   alt={`portfolio-${idx + 1}`}
//                   className="w-full h-[100vh] object-cover rounded"
//                 />
//               </div>
//             );
//           })}
//         </Slider>
//       </div>
//     </section>
//   );
// }