const db = require("../models");
const pengalaman = db.pengalaman;

exports.readAll = async (req, res) => {
  await pengalaman
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
  const data_pengalaman = {
    elemenData: req.body.elemenData,
    perusahaan: req.body.perusahaan,
    posisi: req.body.posisi,
    tgl_mulai: req.body.tgl_mulai,
    tgl_selesai: req.body.tgl_selesai,
    tanggung_jawab: req.body.tanggung_jawab,
  };

  console.log("data_pengalaman", data_pengalaman);
  await pengalaman
    .create(data_pengalaman) //menyimpan data_pengalaman ke table pengalaman
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
  await pengalaman
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
  await pengalaman
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
  await pengalaman
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
