import { useEffect, useRef, useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import Card from "../Component/Card";
import Header from "../Component/Header";
import Spinner from "../Component/Spinner";
import styles from "../Styles/App.module.css"; // Ensure this path is correct and the CSS module is properly configured
import LandingSection from "../Component/LandingSection";
import Footer from "../Component/Footer";
import imageIcon from "../assets/imageIcon.png";

function App() {
  const [images, setImages] = useState<ImageListType>([]);
  const [result, setResult] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const maxNumber = 100;
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isError) {
      dialogRef.current?.showModal();
    }
  }, [isError]);

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const upload = async () => {
    setIsUploading(true);

    try {
      const formData = new FormData();
      images.forEach((image) => {
        if (image.file) {
          formData.append("image", image.file);
        }
      });
      const res = await fetch("http://localhost:5000/classify", {
        method: "POST",
        body: formData,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Unknown error occurred");
      }
      const data = await res.json();
      setResult(data.Prediction);
    } catch (error) {
      setErrorMessage((error as Error).message);
      setIsError(true);
      console.log(error);
    } finally {
      setIsUploading(false);
    }
  };

  const bodySectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToBodySection = () => {
    if (bodySectionRef.current) {
      bodySectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.allContainer}>
      <Header />
      <LandingSection scrollToBodySection={scrollToBodySection} />
      <div className={styles.transitionBackground}></div>
      <div ref={bodySectionRef} className={styles.bodySection}>
        <div className={styles.titleBodyContainer}>
          <h1 className={styles.titleBody}>Upload your image</h1>
          <p>
            Upload your brain image and let&apos;s see the result! Don&apos;t
            worry because your image will not go to our database!
          </p>
        </div>
        <div className={styles.imageContainer}>
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey='data_url'
            acceptType={["jpg", "jpeg", "png"]}
            maxFileSize={10000000}
            allowNonImageType={false}
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              <div className={styles.uploadImageWrapper}>
                <div
                  className={styles.imageWrapper}
                  style={
                    imageList?.length > 0
                      ? { display: "flex" }
                      : { display: "none" }
                  }
                >
                  <div className={styles.imageList}>
                    {imageList.map((image, index) => (
                      <Card
                        key={image.dataURL}
                        image={image}
                        index={index}
                        onImageUpdate={onImageUpdate}
                        onImageRemove={onImageRemove}
                        isUploading={isUploading}
                        result={result}
                      />
                    ))}
                  </div>

                  <div className={styles.addmore}>
                    <button
                      onClick={() => {
                        setResult([]);
                        onImageUpload();
                      }}
                      disabled={isUploading}
                      style={{
                        display: result?.length >= 1 ? "none" : "block",
                      }}
                    >
                      Add more
                    </button>
                  </div>
                </div>
                <div className={styles.buttonContainers}>
                  <div className={styles.buttonWrappers}>
                    <button
                      onClick={onImageUpload}
                      style={{
                        display: imageList?.length > 0 ? "none" : "flex",
                      }}
                    >
                      <div
                        style={{
                          display: imageList?.length > 0 ? "none" : "flex",
                          ...(isDragging ? { color: "red" } : undefined),
                        }}
                        {...dragProps}
                        className={styles.dropzone}
                      >
                        <div className={styles.dropzoneWrapper}>
                          <img src={imageIcon} alt='' id={styles.imageId} />
                          <div className={styles.dropzoneBody}>
                            <h1>Click or Drop here</h1>
                            <p>Supported file format : jpg, jpeg, png</p>
                          </div>
                        </div>
                      </div>
                    </button>
                    <div
                      className={styles.buttonRemoveUpload}
                      style={{
                        display: imageList?.length > 0 ? "flex" : "none",
                      }}
                    >
                      <button
                        onClick={() => {
                          onImageRemoveAll();
                          setResult([]);
                          setErrorMessage("");
                        }}
                        disabled={isUploading}
                        style={{ backgroundColor: "red", color: "white" }}
                      >
                        Remove all images
                      </button>

                      <button
                        onClick={async () => await upload()}
                        disabled={isUploading}
                        style={{
                          backgroundColor: "#a35c9d",
                          color: "white",
                          display: result?.length >= 1 ? "none" : "block",
                        }}
                      >
                        {isUploading ? <Spinner /> : "Upload"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </ImageUploading>
        </div>
        {errorMessage && (
          <dialog
            className={styles.errorContainer}
            style={{ display: isError ? "flex" : "none" }}
            ref={dialogRef}
          >
            <div className={styles.dialogHeader}>
              <h1>Error</h1>
              <button
                type='button'
                onClick={() => {
                  setIsError(false);
                  dialogRef.current?.close();
                }}
                style={{
                  border: "none",
                  padding: 0,
                  background: "transparent",
                  color: "black",
                  fontSize: "2rem",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                X
              </button>
            </div>
            <div className={styles.bodyContainer}>
              <p style={{ textAlign: "center" }} id={styles.errorBody}>
                {errorMessage}
              </p>
            </div>
          </dialog>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
