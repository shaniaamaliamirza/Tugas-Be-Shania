module.exports = (app) => {
    const contact = require("../controllers/contact.controllers")
    let router = require("express").Router()

    router.get("/readall", contact.readAll)
    router.post("/create", contact.create)
    router.put("/update/:id", contact.update)
    router.delete("/delete/:id", contact.delete)
    router.get("/readid/:id", contact.readById)

    app.use("/api/contact", router)
}
