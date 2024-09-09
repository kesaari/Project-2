function arrayToCsv(data) {
  if (!Array.isArray(data)) throw new Error("Unexpected value");
  const separator = ",";
  let csv = "";

  for (let i = 0; i < data.length; i++) {
    if (!Array.isArray(data[i])) throw new Error("Unexpected value");
    for (let j = 0; j < data[i].length; j++) {
      if (typeof data[i][j] !== "string" && typeof data[i][j] !== "number") throw new Error("Unexpected value");
      let value = String(data[i][j]);
      if (value.includes(separator) || value.includes('"') || value.includes("\n")) {
        value = `"${value.replace(/"/g, '""')}"`;
      }
    
      csv += value;
      if (j !== data[i].length - 1) {
        csv += separator;
      }
    }
    if (i !== data.length - 1) {
      csv += "\n";
    }
  }

  return csv;
}

export { arrayToCsv };
// Для запуска теста вводим в терминале команду: npm run test:current -- arrayToCsv.test.js
