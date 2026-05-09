const ExcelJs = require('exceljs');
const {test,expect} = require("@playwright/test")

async function writeExcelTest(searchText,replaceText,change,filePath) {
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(filePath)
    const worksheet = workbook.getWorksheet('Sheet1');
    const output = await readExcel(worksheet, searchText);
    const cell = worksheet.getCell(output.row, output.column+change.colChange);
    cell.value = replaceText;
    await workbook.xlsx.writeFile(filePath);
}


async function readExcel(worksheet, searchText) {
  let output = { row: -1, column: -1 };
    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {

            //console.log(cell.value);
            if (cell.value == searchText) {
                output.row = rowNumber;
                output.column = colNumber;
            }

        })
    })
    return output;

}

test("UPload doenload excel validation",async({page})=>{
    const testSearch = 'Mango';
    const updateValue = '999';
    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html")

    const downloadPromise = page.waitForEvent('download');
   // await page.locator("button:has-text("Download").click();
    await page.getByRole('button',{name:"Download"}).click();
    await downloadPromise;
   writeExcelTest(testSearch,updateValue,{rowChange:0, colChange:2},"C:/Users/shreyas.m/Downloads/download.xlsx");
   await page.locator("#fileinput").click();

   //setinput files.. for this to work the html element should have property type="file"
   await page.locator("#fileinput").setInputFiles("C:/Users/shreyas.m/Downloads/download.xlsx");

   const textLocator = await page.getByText(testSearch);
   const desiredRow = await page.getByRole('row').filter({has :textLocator});
   
   await expect(desiredRow.locator("#cell-4-undefined")).toContainText(updateValue);
   await page.pause();


})

