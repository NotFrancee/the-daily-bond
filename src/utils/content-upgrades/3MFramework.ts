import { TDocumentDefinitions, Content } from 'pdfmake/interfaces';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { header } from './header';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

const week = (number: number, hasWeeklyTasks: boolean): Content => [
  { text: `Settimana ${number}`, style: 'headingM' },
  hasWeeklyTasks ? { text: 'put weekly' } : { text: "don't put" },
  {
    // layout: "noBorders",
    table: {
      headerRows: 1,
      body: [['LUN', 'MAR', 'MER', 'GIO', 'VEN', 'SAB', 'DOM']],
    },
  },
];

const docDefinition: TDocumentDefinitions = {
  header,
  content: [
    { text: 'Pianificazione', style: 'header', alignment: 'center' },
    {
      text: 'xx-xx-xxxx -> xx-xx-xxxx',
    },
    { text: 'Settimana 1 - 2' },
    week(1, true),
    { text: 'Settimana 1' },
    { text: 'table here' },
    { text: 'Settimana 3 -> Settimana 4' },
    { text: 'Settimana 3' },
    { text: 'Task Settimanali' },
    { text: 'table here' },
    { text: 'Settimana 4' },
    { text: 'Task Settimanali' },
    { text: 'table here' },
    { text: 'Settimana 4 -> Settimana 8' },
  ],
  styles: {
    header: {
      fontSize: 22,
      bold: true,
      color: 'black',
    },
  },
  defaultStyle: {
    fontSize: 15,
  },
};

const createPdf = () => {
  pdfMake.createPdf(docDefinition).open();
};

// const createPdf = () => {
//   const Cheatsheet = new PDFDocument();

//   const stream = doc.pipe(blobStream());

//   doc.font("minion-pro, serif").fontSize(25).text("some example text");
//   doc.image("src/images/icon.png", {
//     fit: [300, 300],
//   });

//   doc
//     .addPage()
//     .fillColor("blue")
//     .text("Here is a link!", 100, 100)
//     .underline(100, 100, 160, 27, { color: "#0000FF" })
//     .link(100, 100, 160, 27, "http://google.com/");

//   doc.end();
//   return stream.on("finish", function () {
//     // get a blob you can do whatever you like with
//     const blob = stream.toBlob("application/pdf");

//     // or get a blob URL for display in the browser
//     const url = stream.toBlobURL("application/pdf");
//     console.log({ blob, url });
//     return url;
//   });
// };

export default createPdf;
