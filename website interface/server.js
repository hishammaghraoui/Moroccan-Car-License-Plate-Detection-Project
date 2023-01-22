const cors = require("cors")
// Import Express JS
const express = require('express');
// Import Python shell for execution of python script
const {PythonShell} = require('python-shell');
// Import Multer for handling received files from HTTP requests
const multer = require("multer");

// Initialize Express JS
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())

// Initialize Multer
const upload = multer({ dest: "uploads/" });

// Default route
app.get('/api', (req, res) => {
    res.send("Hello world!!");
});

// Function to execute when an image is recieved
const uploadFiles = (req, res) => {
    try {
        let options = {
            args: [req.file.filename]
        }
    
        // PythonShell.run("app.py", options, (err, results) => {
        //     console.log(results)
        //     res.json({ message: "Success", value : results });
        // })
        res.json({message: "success"})
    } catch (err){
        res.json({
            message: "Error",
            value : err
        })
    }
}

// Route to do recognition on an image
// Headers {Content-Type : multipart/form-data}
// Body {upload: file}
app.post("/api/recognize", upload.single("upload"), uploadFiles);

// Mount the application
app.listen(3000, () => {
    console.log('Application is listening on port 3000!');
});