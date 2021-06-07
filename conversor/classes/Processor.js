class Processor {
    static Process(data) {
        let content = data.split("\r\n") //Separando por quebra de linha
        let rows = []

        content.forEach(row => {
            let array = row.split(";")
            rows.push(array)
        });
        return rows
    }
}
module.exports = Processor