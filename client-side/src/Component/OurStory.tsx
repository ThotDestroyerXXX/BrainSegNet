import styles from "../Styles/about.module.css";
import family from "../assets/family.jpg";
import { useLayoutEffect } from "react";
// import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StoryCard from "./StoryCard";
// import mainImg from "../assets/mainImg.png";
// import mainTes from "../assets/mainTes.webp";

gsap.registerPlugin(ScrollTrigger);

function OurStory() {
  useLayoutEffect(() => {
    const storyContainer = document.querySelector(`.${styles.storyContainer}`);
    const storyWrapper = document.querySelector(`.${styles.storyWrapper}`);
    const storySlider = document.querySelector(`.${styles.storySlider}`);
    const storyHeader = document.querySelector(`.${styles.storyHeader}`);
    const storyImg = document.querySelectorAll(`#${styles.storyImg}`);
    // const mainImg = document.querySelector(`.${styles.mainImg}`);
    // const imageTextContainer1 = document.querySelector(
    //   `.${styles.imageTextContainer1} img`
    // );
    const timeL = gsap.timeline({
      ease: "none",
      defaults: {
        immediateRender: false,
      },
      scrollTrigger: {
        trigger: storyWrapper,
        start: "bottom bottom",
        end: () =>
          `+=${
            (storyContainer?.scrollHeight || 0) -
            (storyWrapper?.scrollHeight || 0)
          } bottom`,
        toggleActions: "play pause pause reverse",
        // pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        // markers: true,
        // pinSpacing: true,
      },
    });

    const storyHeaderTl = gsap.timeline({
      scrollTrigger: {
        trigger: storyHeader,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
        toggleActions: "play none none reverse",
        invalidateOnRefresh: true,
      },
    });

    storyHeaderTl.fromTo(
      storyHeader,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
      }
    );

    timeL
      .to(storySlider, {
        x: () =>
          storyContainer && storyWrapper
            ? (storyContainer.scrollHeight - storyWrapper.scrollHeight) /
                window.innerHeight -
              1300
            : 0,
        duration: 1,
      })
      .to(
        storyImg,
        {
          // objectPosition: "right center",
          duration: 1,
          onUpdate: function () {
            storyImg.forEach((img) => {
              const progress = this.progress();
              (img as HTMLImageElement).style.objectPosition = `${
                progress * 100
              }% center`;
            });
          },
        },
        0
      );
  }, []);

  return (
    <div className={styles.storyContainer}>
      <div className={styles.storyWrapper}>
        <div className={styles.storyButtonTitleContainer}>
          <p id={styles.featureButtonTitle}>STORY</p>
        </div>
        <div className={styles.storyHeader}>
          <h1>Our Story</h1>
          <p>Take a look at our journey on making this product</p>
        </div>
        <div className={styles.storySlider}>
          <StoryCard
            storyImg={family}
            storyTitle='2020'
            storyBody='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  facilisis, dolor nec luctus.'
          />
          <StoryCard
            storyImg={family}
            storyTitle='2021'
            storyBody='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  facilisis, dolor nec luctus.'
          />
          <StoryCard
            storyImg={family}
            storyTitle='2022'
            storyBody='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  facilisis, dolor nec luctus.'
          />
          <StoryCard
            storyImg={family}
            storyTitle='2023'
            storyBody='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  facilisis, dolor nec luctus.'
          />
          <StoryCard
            storyImg={family}
            storyTitle='2024'
            storyBody='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  facilisis, dolor nec luctus.'
          />
        </div>
      </div>
    </div>
  );
}

export default OurStory;
