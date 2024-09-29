module.exports = (app) => {
    const pendidikan = require("../controllers/pendidikan.controllers")
    let router = require("express").Router()

    router.get("/readall", pendidikan.readAll)
    router.post("/create", pendidikan.create)
    router.put("/update/:id", pendidikan.update)
    router.delete("/delete/:id", pendidikan.delete)
    router.get("/readid/:id", pendidikan.readById)

    app.use("/api/pendidikan", router)
}
