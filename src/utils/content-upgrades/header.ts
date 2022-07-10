import { Content, DynamicContent } from "pdfmake/interfaces";

export const header: Content | DynamicContent = {
  columns: [
    { width: "50%", text: "The Daily Bond" },
    {
      width: "50%",
      text: "3M Framework CheatSheet",
      bold: true,
      alignment: "right",
    },
  ],
  margin: [15, 15],
};
