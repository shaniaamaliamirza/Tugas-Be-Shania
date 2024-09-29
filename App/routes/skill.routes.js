module.exports = (app) => {
    const skill = require("../controllers/skill.controllers")
    let router = require("express").Router()

    router.get("/readall", skill.readAll)
    router.post("/create", skill.create)
    router.put("/update/:id", skill.update)
    router.delete("/delete/:id", skill.delete)
    router.get("/readid/:id", skill.readById)

    app.use("/api/skill", router)
}
