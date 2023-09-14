const { Activity } = require("../db");
const { Country } = require("../db");

const postActivity = async (req, res) => {
    try {
        const {countries,name, difficulty, duracion, season } = req.body;

        if(!name ||!difficulty || !season) {
           throw new Error("insufficient information")
        }

        let newActivity = await Activity.create({
            name,
            difficulty,
            duration: duracion? duracion: "00:00",
            season
        });
    
            
            await newActivity.addCountries(countries);

        //para obtener la actividad con la relacion a los paises asociados
        const activityCountry = await Activity.findByPk(newActivity.id, {
            include: [
              {
                model: Country,
                through: { attributes: []},
                // attributes: ['id', 'name']
              }
            ]
          })
        

        return res.status(200).json(activityCountry);

    } catch (error) {
           return res.status(400).json(error.message);
        }
    };

module.exports = { postActivity };