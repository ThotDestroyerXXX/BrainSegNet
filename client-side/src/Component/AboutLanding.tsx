import styles from "../Styles/about.module.css";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadFull } from "tsparticles";
import {
  MoveDirection,
  OutMode,
  type Container,
  type ISourceOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";
import AboutCard from "../Component/AboutCard";
import family from "../assets/family.jpg";

function AboutLanding() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        zIndex: { value: -1 },
        color: {
          value: "#000000",
        },
        links: {
          color: "#000000",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className={styles.landingContainer}>
      {init && (
        <div className={styles.particleContainer}>
          <Particles
            className={styles.particleObject}
            particlesLoaded={particlesLoaded}
            options={options}
          />
        </div>
      )}
      <div className={styles.headContainer}>
        <h1 className={styles.title}>A New Era for</h1>
        <h1 className={styles.title}>Tumor Detection</h1>
        <p className={styles.landingContent}>
          AI-based brain tumor image classification tool that provides accurate
          and precise results.
        </p>
      </div>

      <div className={styles.cardListContainer}>
        <AboutCard
          cardImg={family}
          cardTitle='Accurate and Precise Classification'
          cardText='AI-based brain tumor image classification tool that provides accurate and precise results.'
        />
        <AboutCard
          cardImg={family}
          cardTitle='Fast and Reliable Result Classification'
          cardText='It only takes 1 second to classify your brain image, so you can get the result quickly.'
        />
        <AboutCard
          cardImg={family}
          cardTitle='Cost Saving and Efficient Tool'
          cardText='No need to spend a lot of money to classify brain image, because it is free to use.'
        />
      </div>
    </div>
  );
}

export default AboutLanding;
