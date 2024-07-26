const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.post('/upload', upload.array('files[]'), (req, res) => {
    const files = req.files;
    const fileData = files.map(file => {
        // サムネイル生成処理（例：pdf-thumbnailライブラリの使用）
        const thumbnail = `/path/to/thumbnail/${file.filename}.png`; // 仮のサムネイルURL
        const title = path.basename(file.originalname, '.pdf');
        const uploadedAt = new Date().toLocaleString();

        return { thumbnail, title, uploadedAt };
    });

    res.json({ files: fileData });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
