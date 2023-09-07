const { Country } = require("../db")

const getCountryById = async (req, res) => {
    try {
        const { idPais } = req.params;//destructuro el id de la propiedad "paramas";

        const finded = await Country.findOne({ where: { id: idPais } });//y lo busco en la base de datos y guardo el resultado en una una constante;

        res.status(200).json(finded);
    } catch (error) {
        res.status(400).json(error);
    }
}
module.exports = { getCountryById };