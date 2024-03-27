import React, { useState, useEffect } from "react";

// const Carousel = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => {
//         return (prevIndex + 1) % 4;
//       });
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   const images = [
//     "https://picsum.photos/100", // replace these pictures with your url
//     "https://picsum.photos/200", // replace these pictures with your url
//     "https://picsum.photos/300", // replace these pictures with your url
//     "https://picsum.photos/400"  // replace these pictures with your url
//   ];

//   return (
//     <div className="carousel">
//       {images.map((image, index) => (
//         <div className="image" key={index} style={{ opacity: index === currentImageIndex ? 1 : 0 }}>
//           <img className={index === currentImageIndex ? 'image current' : 'image'} src={image} alt="Carousel image" />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Carousel;



// .carousel {
//     position: relative;
//     width: 200px;
//     height: 200px;
//   }

//   .image {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     opacity: 0;
//     transition: opacity 1s ease-in-out;
//   }

//   .image.current {
//     opacity: 1;
//   }
