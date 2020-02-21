const fs = require("fs");
const axios = require("axios");

function genMessage(sheetId, range, pathFolder) {
  fs.mkdirSync(pathFolder, { recursive: true });
  const EN_PATH = pathFolder + "/en.json";
  const VI_PATH = pathFolder + "/vi.json";
  const JA_PATH = pathFolder + "/ja.json";
  let en = {};
  let vi = {};
  let ja = {};
  axios
    .get("https://sheet.thesimpleapi.com/" + sheetId + "/" + range)
    .then(response => {
      let rows = response.data;
      rows.map(row => {
        en[row[0]] = row[1];
        vi[row[0]] = row[2];
        ja[row[0]] = row[3];
      });
      fs.writeFile(EN_PATH, JSON.stringify(en, null, 2), error => {
        if (error) return console.error(error);
        console.log("Message stored to", EN_PATH);
      });
      fs.writeFile(VI_PATH, JSON.stringify(vi, null, 2), error => {
        if (error) return console.error(error);
        console.log("Message stored to", VI_PATH);
      });
      fs.writeFile(JA_PATH, JSON.stringify(ja, null, 2), error => {
        if (error) return console.error(error);
        console.log("Message stored to", JA_PATH);
      });
    })
    .catch(error => console.log(error));
}

module.exports = genMessage;
