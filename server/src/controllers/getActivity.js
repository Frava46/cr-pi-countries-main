const { Activity } = require("../db");

const getActivity = async (req, res) => {
    try {
        const allActivities = await Activity.findAll();

        if (!allActivities.length) {
            return res.json("No hay ninguna actividad creada")
        };
        const mapActivity = allActivities.map(async(act)=> {
            await Activity.findByPk(act.id, {
                include: [
                    {
                      model: Country,
                      through: { attributes: []},
                      // attributes: ['id', 'name']
                    }
                  ]
            })
        })
        const activities = await Activity.findAll();

        res.status(200).json(activities);
    } catch (error) {
        res.status(400), json(error.message);
    }
}

module.exports = { getActivity };