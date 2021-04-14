const {Schema, model} = require("mongoose")

const schema = new Schema({
    imageUrl: {type: String, required: true},
    name: {type: String, required: true}
})

module.exports = model("Course", schema)