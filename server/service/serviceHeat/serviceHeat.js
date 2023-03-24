import Models from "../../models/models.js";
import pkg from "sequelize";
const { Op } = pkg;

// Поиск по номеру
export const getHeatMetersByNumberFlat = async (
    number,
    objectId,
    limit,
    page
) => {
    try {
        // Получаем данные для постраничной навигации

        page = Number(page) || 1;
        limit = Number(limit) || 6;
        let offset = page * limit - limit;

        const heatWater = "Счётчик тепла";

        const listFlats = await Models.MainAddMeter.findAndCountAll({
            where: {
                objectBuildId: objectId,
                typeMeter: heatWater,
                [Op.or]: [
                    {
                        flat: {
                            [Op.eq]: number,
                        },
                    },
                    {
                        numberMeter: {
                            [Op.eq]: number,
                        },
                    },
                    {
                        flat: {
                            [Op.like]: `%${number}%`,
                        },
                    },
                    {
                        numberMeter: {
                            [Op.like]: `%${number}%`,
                        },
                    },
                ],
            },
            limit: limit,
            offset: offset,
        });

        return listFlats;
    } catch (e) {
        console.log(e);
    }
};