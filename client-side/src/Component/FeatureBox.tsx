import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../Styles/about.module.css";

interface FeatureBoxProps {
  featureIcon: IconProp;
  featureTitle: string;
  featureText: string;
}

function FeatureBox({
  featureIcon,
  featureTitle,
  featureText,
}: Readonly<FeatureBoxProps>) {
  return (
    <div className={styles.featureBoxWrapper}>
      <div className={styles.featureBoxImg}>
        <FontAwesomeIcon icon={featureIcon} />
      </div>
      <div className={styles.featureBoxTitleSubtitle}>
        <h2>{featureTitle}</h2>
        <p>{featureText}</p>
      </div>
    </div>
  );
}

export default FeatureBox;
