const axios = require('axios');
const { Country, Activity } = require('../db.js');


const getCountries = async (req, res) => {
    try {
        const { data } = await axios.get("http://localhost:5000/countries");

        const mapingCountries = data.map(async(data) => {

             await Country.findOrCreate({where:{
                id: data?.cca3,
                name: data?.name?.common,
                flagImg: data?.flags?.png,
                continent: data?.continents[0],
                capital: data.capital ? data.capital[0] : "Has no Capital",
                subregion: data?.subregion? data?.subregion : "Has no Subregion",
                area: data?.area,
                population: data?.population,
            }});

        })

        const allCountries = await Country.findAll({
            include: [
                {
                  model: Activity,
                  through: { attributes: []},
                  attributes: ['name', "difficulty","duration","season"]
                }
            ]
        })
        return res.status(200).json(allCountries);
    } catch (error) {
        return res.status(400).json(error.message)
    };
}



module.exports = { getCountries };