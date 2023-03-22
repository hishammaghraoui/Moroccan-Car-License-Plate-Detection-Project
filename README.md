Moroccan Car License Plate Detection
This project is an attempt to automate the detection of Moroccan Car License Plate using Python and several open-source libraries such as YOLOV3 model, OpenCV, EasyOCR, and ArabicOCR. The system can be integrated into a website using ReactJS and AxiosJS to allow users to upload an image of a car and the system will automatically detect and extract the license plate number.

Installation
To run this project, you need to install the following dependencies:

Python 3.7 or later
OpenCV
YOLOV3
EasyOCR
ArabicOCR
ReactJS
AxiosJS
You can install these dependencies using pip and npm.


pip install opencv-python
pip install easyocr
npm install react
npm install axios
You also need to download the pre-trained weights for the YOLOV3 model from the official website.

Usage
To use this project, you need to run the following command:



python detect_license_plate.py --image path/to/image
This will load the image specified in the path/to/image and detect the license plate using the YOLOV3 model. The detected license plate number will be extracted using EasyOCR and ArabicOCR and displayed on the terminal.

To integrate this system into a website, you need to use ReactJS and AxiosJS to send an HTTP request to the Python server running the license plate detection code. You can then display the detected license plate number on the website.

Contributing
Contributions to this project are welcome. If you find any bugs or have any suggestions for improvement, feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.
