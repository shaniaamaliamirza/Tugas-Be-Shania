const db = require("../models");
const biodata = db.biodata;

exports.readAll = async (req, res) => {
  await biodata
    .findAll({ where: { id: "1" } })
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
    console.log(req.body);
    
    // Cek apakah sudah ada data
    const existingData = await biodata.findAll();
    
    if (existingData.length > 0) {
        return res.status(400).send({
            message: "Data sudah ada. Tidak dapat menambahkan data baru."
        });
    }

    // Validasi email tidak boleh null
    if (!req.body.email) {
        return res.status(400).send({
            message: "Email tidak boleh kosong."
        });
    }

    const data_user = {    
        elemenData: req.body.elemenData,    
        nama: req.body.nama,
        alamat: req.body.alamat,
        email: req.body.email,
        no_hp: req.body.no_hp 
    };

    console.log("data_", data_user);     
    await biodata.create(data_user)
        .then(data => {    
            res.send({    
                message: "Data berhasil ditambahkan."   
            }); 
        })   
        .catch(err => {
            res.status(500).send({    
                message: err.message || "Terjadi kesalahan saat menambahkan data."   
            });   
        });  
}


//delete data

exports.delete = async (req, res) => {
  const id = req.params.id;

  await biodata
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

  await biodata
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

//update data

exports.update = async (req, res) => {
  const id = req.params.id;

  await user
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
