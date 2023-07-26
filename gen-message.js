const fs = require("fs");
const axios = require("axios");

function genMessage(sheetId, range, jsonFiles, pathFolder) {
  fs.mkdirSync(pathFolder, { recursive: true });
  axios
    .get("https://sheet.thesimpleapi.com/" + sheetId + "/" + range)
    .then(response => {
      let rows = response.data;
      for (let index = 0; index < jsonFiles.length; index++) {
        const lang = jsonFiles[index];
        const langPath = `${pathFolder}/${lang}.json`;
        const obj = {}
        rows.map(row => {
          obj[row[0]] = row[index + 1];
        });
        fs.writeFile(langPath, JSON.stringify(obj, null, 2) + "\n", error => {
          if (error) return console.error(error);
          console.log("Message stored to", langPath);
        });
      }
    })
    .catch(error => console.log(error));
}

module.exports = genMessage;
