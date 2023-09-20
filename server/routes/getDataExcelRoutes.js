import reader from "xlsx";
const getDataExcelRoutes = (app) => {
  app.get("/api/test-execl", getData);
};
const getData = (req, res) => {
  const file = reader.readFile("./assets/kew.xlsx");
  let data = [];
  const sheets = file.SheetNames;
  for (let i = 0; i < sheets.length; i++) {
    const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
    temp.forEach((res) => {
      data.push(res);
    });
  }
  console.log(data);

  res.status(200).send({ success: true, data });
};

export { getDataExcelRoutes };
