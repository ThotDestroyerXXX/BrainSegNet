import styles from "../Styles/about.module.css";

interface StoryCardProps {
  storyImg: string;
  storyTitle: string;
  storyBody: string;
}

function StoryCard({
  storyImg,
  storyTitle,
  storyBody,
}: Readonly<StoryCardProps>) {
  return (
    <div className={styles.storyCard}>
      <img src={storyImg} alt='' id={styles.storyImg} />
      <div className={styles.storyBody}>
        <h3>{storyTitle}</h3>
        <p>{storyBody}</p>
      </div>
    </div>
  );
}

export default StoryCard;
