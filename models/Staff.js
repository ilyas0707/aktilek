const {Schema, model} = require("mongoose")

const schema = new Schema({
    imageUrl: {type: String, required: true},
    fullname: {type: String, required: true},
    position: {type: String, required: true},
    administration: {type: Boolean, required: true}
})

module.exports = model("Staff", schema)