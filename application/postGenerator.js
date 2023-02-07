const path = require("path");
const fs = require("fs");

const targetDir = path.resolve(__dirname, "content", "en");
const targetDirPtBr = path.resolve(__dirname, "content", "pt-br");
const postTemplate = `---\ntitle: \ndescription: \ndate: \nexcerpt: \ncategory: \ntags: \n---\n`;

function getDateFormatted() {
    const today = new Date();
    return `${today.getFullYear()}-${pad2Digits(today.getMonth() + 1)}-${pad2Digits(today.getDate())}`;
}

function pad3digits(value) {
    if(value < 10) return `00${value}`;
    if(value < 100) return `0${value}`;
    return value;
}

function pad2Digits(value) {
    if(value < 10) return `0${value}`;
    return value;
}

function getIndexByFilename(filename) {
    return filename.match(/post-(\d{3})/)[1];
}

function buildNewFilename(lastIndex) {
    return `_post-${pad3digits(lastIndex+1)}_${getDateFormatted()}`;
}

fs.readdir(targetDir, function(err, filenames) {
    if(err) {
        return console.log(`Unable to scan ${targetDir}`);
    }

    let lastIndex = 0;
    for(const filename  of filenames) {
        const fileIndex = parseInt(getIndexByFilename(filename));
        if(fileIndex > lastIndex) {
            lastIndex = fileIndex;
        }
    };
    const newFilename = buildNewFilename(lastIndex);
    console.log(`Generating ${path.resolve(targetDir, newFilename)}.md`);
    console.log(`Generating ${path.resolve(targetDirPtBr, newFilename)}.md`);
    fs.open(`${path.resolve(targetDir, newFilename)}.md`, "w", function(err, file) {
        if(err) {
            return console.log(`Unable to generate ${path.resolve(targetDir, newFilename)}.md`);
        }
        fs.write(file, postTemplate, function(err) {
            if(err) {
                return console.log(`Unable to write on ${path.resolve(targetDir, newFilename)}.md`);
            }
            console.log(`${path.resolve(targetDir, newFilename)}.md generated`);
        });
        
    });

    fs.open(`${path.resolve(targetDirPtBr, newFilename)}.md`, "w", function(err, file) {
        if(err) {
            return console.log(`Unable to generate ${path.resolve(targetDirPtBr, newFilename)}.md`);
        }
        fs.write(file, postTemplate, function(err) {
             if(err) {
                return console.log(`Unable to write on ${path.resolve(targetDirPtBr, newFilename)}.md`);
            }   
            console.log(`${path.resolve(targetDirPtBr, newFilename)}.md generated`);
        })
    });
});
