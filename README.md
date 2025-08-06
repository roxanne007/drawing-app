# Roxy's Drawing App 🎨

A browser-based drawing application built using **p5.js**, featuring multiple drawing tools, shapes, colour pickers, stamps, and cropping functionality.

## 🚀 Features

- 🖊️ Freehand Tool  
- 🌈 Spray Can Tool  
- ✏️ Eraser  
- 📏 Line Tool  
- 🔁 Mirror Draw Tool  
- 🔲 Shape Tool (rectangle, circle, triangle, heart)  
- 🖼️ Stamp Tool (smiley, heart, star) — now switchable!  
- ✂️ Crop Tool  
- 🎨 Colour picker + slider for size control  
- 💾 Save, Clear, and Reload buttons  

## 🧰 Technologies Used

- [p5.js](https://p5js.org/)
- JavaScript
- HTML5 / CSS3

## 📁 Folder Structure

```bash
drawing-app/
│
├── index.html
├── stylesheets/
│   └── style.css
├── assets/
│   ├── smileyface.jpg
│   ├── heart.jpg
│   ├── star.jpg
│   ├── rectangle.jpg
│   ├── circle.jpg
│   ├── triangle.jpg
│   └── scissors.jpg
├── helpers/
│   ├── eventhelpers.js
│   ├── colourpalette.js
│   ├── drawinghelpers.js
│   ├── toolbox.js
│   └── starthelpers.js
├── tools/
│   ├── freehandtool.js
│   ├── spraycantool.js
│   ├── erasertool.js
│   ├── linetotool.js
│   ├── mirrordrawtool.js
│   ├── shapestool.js
│   ├── stamptool.js
│   └── croptool.js
└── sketch.js

🔧 Setup & Usage
Clone this repo

bash
Copy
Edit
git clone https://github.com/yourusername/drawing-app.git
cd drawing-app
Open index.html in your browser
You can also host it using GitHub Pages or a static server.

Draw away!
Use the tools in the sidebar and options panel to start creating.


Image assets must be placed in the assets/ folder and referenced in lowercase.

📸 Screenshots

[index.pdf](https://github.com/user-attachments/files/21611710/index.pdf)

✨ Credits
Made with ❤️ by Roxy
Powered by p5.js
