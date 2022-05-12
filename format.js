var fs = require('fs');
var path = require('path');

function checkDir(currentDirPath) {
    fs.readdir(currentDirPath, function (err, files) {
        if (err) {
          console.error("Could not list the directory.", err);
          process.exit(1);
        }
      
        files.forEach(function (file) {
            const filePath = path.join(currentDirPath, file);
            fs.stat(filePath, function (error, stat) {
                if (error) {
                    console.error("Error stating file.", error);
                    return;
                }
        
                if (stat.isFile() && file.toLowerCase() !== "readme.md" && file.toLowerCase().endsWith(".md")) {
                    moveFile(filePath)
                }
                else if (stat.isDirectory() && !file.startsWith(".")) {
                    checkDir(filePath)
                }
            });
        });
    });
}

function moveFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return console.log(err);
        }
        const replacedPathsInFile = data.replaceAll(/]\(..\//g, "](../../").replaceAll(/]\(.\//g, "](../");
        console.log("replacedPathsInFile", replacedPathsInFile);
        fs.writeFile(filePath, replacedPathsInFile, 'utf8', (err) => {
            if (err) {
                return console.log(err);
            }
            const newFolderPath = path.join(filePath.slice(0, filePath.indexOf(".md")));
            if (!fs.existsSync(newFolderPath)) {
                fs.mkdirSync(newFolderPath, { recursive: true });
            }
            fs.rename(filePath, path.join(newFolderPath, "README.md"), function (error) {
                if (error) {
                    console.error(`File moving error\nFrom: ${filePath}\nTo: `, error);
                }
            });
        });
    });
}

checkDir(path.join(__dirname, "./docs"));