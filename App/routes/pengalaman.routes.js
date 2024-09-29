module.exports = (app) => {
    const pengalaman = require("../controllers/pengalaman.controllers")
    let router = require("express").Router()

    router.get("/readall", pengalaman.readAll)
    router.post("/create", pengalaman.create)
    router.put("/update/:id", pengalaman.update)
    router.delete("/delete/:id", pengalaman.delete)
    router.get("/readid/:id", pengalaman.readById)

    app.use("/api/pengalaman", router)
}
