const { Router } = require("express")
const Gallery = require("../models/Gallery")
const router = Router()

router.post("/add", async (req, res) => {
    try {

        const { imageUrl, heading, date, description } = req.body

        const gallery = new Gallery({
            imageUrl, heading, date, description
        })

        await gallery.save()

        res.status(201).json({ gallery, message: "Фотография добавлена" })

    } catch (e) {
        res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" })
    }
})

router.get("/getAll", async (req, res) => {
    try {
        await Gallery.find((error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    } catch (e) {
        res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" })
    }
})

module.exports = router