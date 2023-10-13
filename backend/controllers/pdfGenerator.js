const puppeteer = require("puppeteer");
const { admin } = require("../models");
const { course } = require("../models");

const generatePDF = async (req, res) => {
  try {
    const { htmlContent } = req.body;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(htmlContent);
    const pdfBuffer = await page.pdf({ format: "A4" });

    await browser.close();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=popup.pdf");
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).send("Error generating PDF");
  }
};

module.exports = {
  generatePDF,
};
