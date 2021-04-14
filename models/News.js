const {Schema, model} = require("mongoose")

const schema = new Schema({
    imageUrl: {type: String, required: true},
    heading: {type: String, required: true},
    date: {type: String, default: Date.now},
    description: {type: String, required: true}
})

module.exports = model("News", schema)