// import React from "react";
// import { Spline } from "@splinetool/react-spline";

// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

// const Hero = () => {
//   return (
//     <section className="relative w-full h-screen mx-auto">
//       <div
//         className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
//       >
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915eff]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         <Spline scene="https://prod.spline.design/zTjKXHxig970v6Uz/scene.splinecode" />
//       </div>

//       {/* <ComputersCanvas /> */}
//     </section>
//   );
// };
// export default Hero;
import React from 'react';
import Spline from '@splinetool/react-spline/next';


const Hero = () =>{
  return (
    <section style={{ width: '100%', height: '100vh' }}>
      <Spline
        scene="https://prod.spline.design/zTjKXHxig970v6Uz/scene.splinecode" 
      />
    </section>
  );
}
export default Hero 