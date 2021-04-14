const { Router } = require("express")
const Staff = require("../models/Staff")
const router = Router()

router.post("/add", async (req, res) => {
    try {

        const { imageUrl, fullname, position, administration } = req.body

        const staff = new Staff({
            imageUrl, fullname, position, administration
        })

        await staff.save()

        res.status(201).json({ staff, message: "Работник добавлен" })

    } catch (e) {
        res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" })
    }
})

router.get("/getAll", async (req, res) => {
    try {
        await Staff.find((error, data) => {
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

router.put('/update/:id', async (req, res) => {
    console.log(req.params.id);
    try {
        await Staff.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, (error, data) => {
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