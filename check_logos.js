const xlsx = require('xlsx');
const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, 'public', 'logos', 'company_logos.csv'); // it is an xlsx
try {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    console.log("Found", data.length, "rows.");
    if (data.length > 0) {
        console.log("Keys:", Object.keys(data[0]));
        console.log("First row example:", data[0]);
    }
} catch (e) {
    console.error("Error reading xlsx:", e.message);
}
