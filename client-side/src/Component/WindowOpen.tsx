import styles from "../Styles/about.module.css";
import windowImage from "../assets/mainTes.webp";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import contactVideo from "../assets/contactVideo.mp4";
// import ContactUs from "../Component/ContactUs";

gsap.registerPlugin(ScrollTrigger);

function WindowOpen() {
  useLayoutEffect(() => {
    const windowContainer = document.querySelector(
      `.${styles.windowContainer}`
    );
    const windowImg = document.querySelector(`#${styles.windowImg}`);
    const contactTitle = document.querySelector(`.${styles.contactHeader}`);
    const contactInput = document.querySelector(`.${styles.inputContact}`);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: windowContainer,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        invalidateOnRefresh: true,
        toggleActions: "play none none none",
        // markers: true,
        onUpdate: (self) => {
          if (self.progress > 0.7) {
            // Change 0.5 to the desired scroll progress
            (windowImg as HTMLElement).style.zIndex = "-1";
            // console.log(self.progress);
          } else if (windowImg) {
            (windowImg as HTMLElement).style.zIndex = "2";
          }
        },
      },
    });

    const tlTitle = gsap.timeline({
      scrollTrigger: {
        trigger: contactTitle,
        start: "top+=400 top",
        end: "bottom+=400 bottom",
        scrub: 1,
        invalidateOnRefresh: true,
        toggleActions: "play none none none",
        // markers: true,
      },
    });

    tl.to(windowImg, {
      scale: 6,
      duration: 5,
    });

    tlTitle
      .fromTo(
        contactTitle,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          // duration: 3,
        }
      )
      .fromTo(
        contactInput,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          // duration: 3,
        }
      );
  }, []);

  return (
    <div className={styles.windowContainer}>
      <div className={styles.windowWrapper}>
        <img src={windowImage} alt='' id={styles.windowImg} />
        <video id={styles.familyImg} autoPlay muted loop>
          <source src={contactVideo} type='video/mp4' />
        </video>
        <div className={styles.contactContainer}>
          <div className={styles.contactWrapper}>
            <div className={styles.contactHeader}>
              <h1>Become Part of Our Team</h1>
              <p>Join now! Feel free to ask if you have any questions</p>
            </div>
            <div className={styles.inputContact}>
              <input type='text' placeholder='Name' />
              <input type='email' placeholder='Email' />
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <p>tes</p>
  );
}

export default WindowOpen;
