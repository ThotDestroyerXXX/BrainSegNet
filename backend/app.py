import tensorflow as tf
from flask import Flask, request, jsonify
from tensorflow.keras.preprocessing.image import img_to_array, load_img
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from flask_cors import CORS
import numpy as np
import io
import logging

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.INFO)

# Load your trained model
new_model = tf.keras.models.load_model('./CNN_Brain_Tumor_Model.h5')

# Define the class labels
class_labels = ['glioma', 'meningioma', 'notumor', 'pituitary']
class_indices = {label: index for index, label in enumerate(class_labels)}

# Initialize the ImageDataGenerator for augmentation
datagen = ImageDataGenerator(rescale=1./255,
                             rotation_range=10,
                             brightness_range=(0.85, 1.15),
                             width_shift_range=0.002,
                             height_shift_range=0.002,
                             shear_range=12.5,
                             zoom_range=0,
                             horizontal_flip=True,
                             vertical_flip=False,
                             fill_mode="nearest")

@app.route('/classify', methods=['POST'])
def classify():
    try:
        image_files = request.files.getlist('image')
        if not image_files:
            logging.warning("No image files received")
            return jsonify({'error': 'No image files received'}), 400

        predictions = []
        images = []

        for image_file in image_files:
            image_stream = io.BytesIO(image_file.read())
            image = load_img(image_stream, target_size=(150, 150))
            image = img_to_array(image)
            image = np.expand_dims(image, axis=0)
            images.append(image)

        images = np.vstack(images)
        images = next(datagen.flow(images, batch_size=len(images), shuffle=False))

        prediction = new_model.predict(images, verbose=False)
        for pred in prediction:
            predicted_class = list(class_indices.keys())[np.argmax(pred)]
            predictions.append(predicted_class)

        return jsonify({'Prediction': predictions})
    except Exception as e:
        logging.error(f"Error during classification: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)