import styles from "../Styles/App.module.css";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <div className={styles.upperFooter}>
          <div className={styles.leftSide}>
            <h1>SegNet</h1>
            <p>
              specializes in providing high-quality image segmentation services
              to reduce money spent and increase productivity
            </p>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.quickLink}>
              <h1>Quick Links</h1>
              <div className={styles.links}>
                <a>Home</a>
                <a>About</a>
              </div>
            </div>
            <div className={styles.contactList}>
              <h1>Contact</h1>
              <div className={styles.links}>
                <a>Instagram</a>
                <a>Facebook</a>
                <a>Twitter</a>
                <a>Email</a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.lowerFooter}>
          <div className={styles.lowerLeft}>
            <p>© 2021 SegNet. All rights reserved.</p>
          </div>
          <div className={styles.lowerRight}>
            <p>Privacy Policy</p>
            <p>|</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
