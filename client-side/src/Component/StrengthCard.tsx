import styles from "../Styles/about.module.css";

interface StrengthCardProps {
  strengthTitle: string;
  strengthText: string;
}

function StrengthCard({ strengthTitle, strengthText }: StrengthCardProps) {
  return (
    <div className={styles.strengthCardWrapper}>
      <h1>{strengthTitle}</h1>
      <p>{strengthText}</p>
    </div>
  );
}

export default StrengthCard;
