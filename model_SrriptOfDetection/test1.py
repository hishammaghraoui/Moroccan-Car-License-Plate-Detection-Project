from PIL import Image
from pytesseract import image_to_string
image=Image.open('5.jpg')
text=image_to_string(image,lang='ara')
print(text)
file=open('output.txt','w')
text=repr(text)
file.write(text)
file.close
