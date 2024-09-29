const db = require("../models");
const contact = db.contact;

exports.readAll = async (req, res) => {
  await contact
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
  const data_contact = {
    elemenData: req.body.elemenData,
    nama: req.body.nama,
    email: req.body.email,
    pesan: req.body.pesan,
  };

  console.log("data_contact", data_contact);
  await contact
    .create(data_contact) //menyimpan data_contact ke table contact
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
  await contact
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
  await contact
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
  await contact
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
