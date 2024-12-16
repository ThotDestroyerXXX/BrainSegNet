// import { useCallback } from "react";
// import Particles from "@tsparticles/react";
// import { loadFull } from "tsparticles";
// import type { Container, Engine } from "@tsparticles/engine";
// import styles from "../Styles/App.module.css"; // Ensure the correct path

// const ParticleBg = () => {

//   return (
//     <div className={styles.particleContainer}>
//       <Particles
//         className={styles.particleObject}
//         init={loadParticles}
//         loaded={particlesLoaded}
//         options={{
//           fpsLimit: 120,
//           interactivity: {
//             events: {
//               onClick: {
//                 enable: true,
//                 mode: "push",
//               },
//               onHover: {
//                 enable: true,
//                 mode: "repulse",
//               },
//               resize: true,
//             },
//             modes: {
//               push: {
//                 quantity: 4,
//               },
//               repulse: {
//                 distance: 200,
//                 duration: 0.4,
//               },
//             },
//           },
//           particles: {
//             color: {
//               value: "#000000",
//             },
//             links: {
//               color: "#000000",
//               distance: 150,
//               enable: true,
//               opacity: 0.5,
//               width: 1,
//             },
//             collisions: {
//               enable: true,
//             },
//             move: {
//               direction: "none",
//               enable: true,
//               outModes: {
//                 default: "bounce",
//               },
//               random: false,
//               speed: 1,
//               straight: false,
//             },
//             number: {
//               density: {
//                 enable: true,
//                 area: 800,
//               },
//               value: 80,
//             },
//             opacity: {
//               value: 0.5,
//             },
//             shape: {
//               type: "circle",
//             },
//             size: {
//               value: { min: 1, max: 5 },
//             },
//           },
//           detectRetina: true,
//         }}
//       />
//     </div>
//   );
// };

// export default ParticleBg;
