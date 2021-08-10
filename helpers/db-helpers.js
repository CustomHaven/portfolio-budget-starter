module.exports = {
    createId(data) {
        const latestRecord = data[data.length -1]
        const newId = latestRecord.id + 1
        if (newId === NaN || newId < 0 || newId === undefined) {
            console.error("Invalid ID");
        }
        return newId
    },
    findById(data, recordId) {
        const record = data.find(item => item.id === Number(recordId))
        if (!record) {
            console.log("Record not found")
        }
        return record
    },
    deleteById(data, recordId) {
        const theIndex = data.findIndex(record => record.id === Number(recordId))
        if (theIndex !== -1) {
            data.splice(theIndex, 1);
            return data
        } else {
            return "Invalid index"
        }
    }
}