const {Schema, model} = require("mongoose")

const schema = new Schema({
    imageUrl: {type: String, required: true}
})

module.exports = model("Gallery", schema)