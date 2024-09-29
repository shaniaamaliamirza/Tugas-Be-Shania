module.exports = (app) => {
    const biodata = require("../controllers/biodata.controllers")
    let router = require("express").Router()

    router.get("/readall", biodata.readAll)
    router.post("/create", biodata.create)
    router.put("/update/:id", biodata.update)
    router.delete("/delete/:id", biodata.delete)
    router.get("/readid/:id", biodata.readById)

    app.use("/api/biodata", router)
}
