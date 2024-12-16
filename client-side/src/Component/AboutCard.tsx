import styles from "../Styles/about.module.css";
// import brainImg from "../assets/brainImg.png";

interface AboutCardProps {
  cardImg: string;
  cardTitle: string;
  cardText: string;
}

function AboutCard({ cardImg, cardTitle, cardText }: Readonly<AboutCardProps>) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <img src={cardImg} alt='' />
        <h2 className={styles.cardTitle}>{cardTitle}</h2>
        <p className={styles.cardText}>{cardText}</p>
        <button id={styles.buttonCard}>Learn More</button>
      </div>
    </div>
  );
}

export default AboutCard;
