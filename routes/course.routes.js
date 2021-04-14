const { Router } = require("express")
const Course = require("../models/Course")
const router = Router()

router.post("/add", async (req, res) => {
    try {

        const { imageUrl, name } = req.body

        const course = new Course({
            imageUrl, name
        })

        await course.save()

        res.status(201).json({ course, message: "Кружок добавлен" })

    } catch (e) {
        res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" })
    }
})

router.get("/getAll", async (req, res) => {
    try {
        await Course.find((error, data) => {
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