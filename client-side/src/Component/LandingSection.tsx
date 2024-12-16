import styles from "../Styles/App.module.css";
import kerasImage from "../assets/KerasImg.png";
import phoneImage from "../assets/phoneImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { useCallback } from "react";
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
import PropTypes from "prop-types";

interface LandingSectionProps {
  scrollToBodySection: () => void;
}

const LandingSection: React.FC<LandingSectionProps> = ({
  scrollToBodySection,
}) => {
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
      {init == true && (
        <div className={styles.particleContainer}>
          <Particles
            className={styles.particleObject}
            particlesLoaded={particlesLoaded}
            options={options}
          />
        </div>
      )}

      <div className={styles.landingWrapper}>
        <div className={styles.landingTitle}>
          <h1>Accurate and Precise Classification For</h1>
          <h1>
            <span>Brain</span> Tumor
          </h1>
        </div>
        <div className={styles.landingSubtitle}>
          <h2>Powered by Keras</h2>
          <img src={kerasImage} alt='' />
        </div>
        <div className={styles.phoneWordContainer}>
          <div className={styles.phoneContainer}>
            <div className={styles.phoneButton}>
              <button id={styles.buttonTry} onClick={scrollToBodySection}>
                try for free <FontAwesomeIcon icon={faArrowRight} />
              </button>
              <button id={styles.buttonLearn}>
                learn more <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>

            <img src={phoneImage} alt='' id={styles.phoneImg} />
          </div>
        </div>
      </div>
    </div>
  );
};
LandingSection.propTypes = {
  scrollToBodySection: PropTypes.func.isRequired,
};

export default LandingSection;
