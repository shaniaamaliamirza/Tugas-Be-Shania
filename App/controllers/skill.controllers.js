const db = require("../models");
const skill = db.skill;

exports.readAll = async (req, res) => {
  await skill
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Maaf, Terjadi kesalahan dalam pengambilan data.",
      });
    });
};

//Create Data

exports.create = async (req, res) => {
  console.log(req);
  const data_skill = {
    elemenData: req.body.elemenData,
    nama_skill: req.body.nama_skill,
    tingkat: req.body.tingkat,
    tahun_pengalaman: req.body.tahun_pengalaman,
  };

  console.log("data_skill", data_skill);
  await skill
    .create(data_skill) //menyimpan data_skill ke table skill
    .then((data) => {
      res.send({
        message: "Data was insert successfully.",
      });
    })

    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating data.",
      });
    });
};

//update data

exports.update = async (req, res) => {
  const id = req.params.id;
  await skill
    .update(req.body, { where: { id: id } })
    .then((num) => {
      num == 1
        ? res.send({
            message: "Data was updated successfully.",
          })
        : res.send({
            message: `Cannot update Data with id=${id}. Maybe Data was not found or req.body is empty!`,
          });
    })

    .catch((err) => {
      res.status(500).send({
        message: `Error updating Data with id=${id}`,
        error: err,
      });
    });
};

//delete data

exports.delete = async (req, res) => {
  const id = req.params.id;
  await skill
    .destroy({
      where: {
        id: id,
      },
    })

    .then((num) => {
      num == 1
        ? res.send({
            message: "Data was deleted successfully.",
          })
        : res.send({
            message: `Cannot delete Data with id=${id}. Maybe Data was not found or req.body is empty!`,
          });
    })

    .catch((err) => {
      res.status(500).send({
        message: `Error deleting Data with id=${id}`,
        error: err,
      });
    });
};

//readById

exports.readById = async (req, res) => {
  const id = req.params.id;
  await skill
    .findOne({ where: { id: id } })
    .then((data) => {
      res.send(data);
    })

    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
      });
    });
};
