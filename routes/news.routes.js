const { Router } = require("express")
const News = require("../models/News")
const router = Router()

router.post("/add", async (req, res) => {
    try {

        const { imageUrl, heading, date, description } = req.body

        const news = new News({
            imageUrl, heading, date, description
        })

        await news.save()

        res.status(201).json({ news, message: "Новость добавлена" })

    } catch (e) {
        res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" })
    }
})

router.get("/getAll", async (req, res) => {
    try {
        await News.find((error, data) => {
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