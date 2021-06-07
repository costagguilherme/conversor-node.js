let pdf = require("html-pdf")

class PDFGenerator {
    static writePDF (name, html) {
        pdf.create(html, {}).toFile(name ,(error) => {})
    }
}

module.exports = PDFGenerator