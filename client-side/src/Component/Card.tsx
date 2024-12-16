import { ImageType } from "react-images-uploading";
import styles from "../Styles/App.module.css";

import React from "react";

interface CardProps {
  key: React.Key | null | undefined;
  image: ImageType;
  index: number;
  onImageUpdate: (index: number) => void;
  onImageRemove: (index: number) => void;
  isUploading: boolean;
  result: string[];
}

function Card({
  key,
  image,
  index,
  onImageUpdate,
  onImageRemove,
  isUploading,
  result,
}: Readonly<CardProps>) {
  return (
    <div key={key} className={styles.imageItem}>
      <div
        className={styles.imageBrain}
        // style={{ borderRadius: "20px" }}
      >
        <img src={image["data_url"]} alt='' />
      </div>

      {/* <p id={styles.filename}>{image.file?.name}</p> */}
      <div className={styles.imageItemBtnWrapper}>
        <button
          onClick={() => onImageUpdate(index)}
          disabled={isUploading}
          style={{
            display: result.length >= 1 ? "none" : "block",
          }}
        >
          Update
        </button>
        <button
          onClick={() => onImageRemove(index)}
          disabled={isUploading}
          style={{
            backgroundColor: "red",
            color: "white",
            display: result.length >= 1 ? "none" : "block",
          }}
        >
          Remove
        </button>
      </div>
      <p className={styles.ptes}>{result?.[index] ? result?.[index] : ""}</p>
    </div>
  );
}

export default Card;
