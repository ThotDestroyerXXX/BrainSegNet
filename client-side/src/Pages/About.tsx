import Header from "../Component/Header";
import styles from "../Styles/about.module.css";

import FeatureBox from "../Component/FeatureBox";
import AboutLanding from "../Component/AboutLanding";
import { gsap } from "gsap";
// import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import OurStory from "../Component/OurStory";

import StrengthCard from "../Component/StrengthCard";
import WindowOpen from "../Component/WindowOpen";
import Footer from "../Component/Footer";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useLayoutEffect(() => {
    const featureButtonTitle = document.getElementById(
      styles.featureButtonTitle
    );
    const featureTitleContainer = document.querySelector(
      `.${styles.featureTitleContainer}`
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: featureButtonTitle,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
        toggleActions: "play none none none",
      },
    });

    const titleBody = gsap.timeline({
      scrollTrigger: {
        trigger: featureTitleContainer,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      featureButtonTitle,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
      }
    );

    titleBody.fromTo(
      featureTitleContainer,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
      }
    );
  }, []);

  return (
    <div className={styles.allContainer}>
      <Header />
      <AboutLanding />

      <div className={styles.featureContainer}>
        <div className={styles.featureButtonTitleContainer}>
          <p id={styles.featureButtonTitle}>FEATURES</p>
        </div>
        <div className={styles.featureTitleContainer}>
          <h1>Detect Brain Tumor and Classify it</h1>
          <h1>Whenever, Wherever</h1>
          <p>
            Here are several features we provide you to make the brain tumor
            classification accurate and reliable.
          </p>
        </div>
        <div className={styles.featureBoxInitial}>
          <div className={styles.featureBoxContainer}>
            <FeatureBox
              featureIcon={faCheck as IconProp}
              featureTitle='Accuracy'
              featureText='classify brain tumor with 99% accuracy rate'
            />
            <FeatureBox
              featureIcon={faCheck as IconProp}
              featureTitle='Cost Saving'
              featureText='No need to spend a lot of money to classify brain image, it is free to use.'
            />
            <FeatureBox
              featureIcon={faCheck as IconProp}
              featureTitle='Fast'
              featureText='It only takes 1 second to classify your brain image'
            />
            <FeatureBox
              featureIcon={faCheck as IconProp}
              featureTitle='Multiple Images'
              featureText='You can classify multiple brain images at once'
            />
            <FeatureBox
              featureIcon={faCheck as IconProp}
              featureTitle='Privacy'
              featureText='Your image will not go to our database so it is safe to use'
            />
            <FeatureBox
              featureIcon={faCheck as IconProp}
              featureTitle='Contact and Support'
              featureText='We provide 24/7 contact and support for you if you have any questions'
            />
            <FeatureBox
              featureIcon={faCheck as IconProp}
              featureTitle='Huge Dataset'
              featureText='We use a huge dataset to classify brain tumor image accurately'
            />
            <FeatureBox
              featureIcon={faCheck as IconProp}
              featureTitle='Accessibility'
              featureText='You can access this tool from anywhere and anytime you want'
            />
          </div>
        </div>
      </div>
      <OurStory />
      <div className={styles.strengthCardContainer}>
        <StrengthCard strengthTitle='2.4M+' strengthText='Active Clients' />
        <StrengthCard
          strengthTitle='99%+'
          strengthText='Precision and Accuracy'
        />
        <StrengthCard
          strengthTitle='10K+'
          strengthText='Brain Tumor Datasets'
        />
        <StrengthCard strengthTitle='2.4M+' strengthText='Active Clients' />
      </div>
      <WindowOpen />
      <Footer />
    </div>
  );
}

export default About;
