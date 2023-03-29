import Models from "../../../models/models.js";
import pkg, { Sequelize } from "sequelize";
import * as XLSX from "xlsx";
const { Op } = pkg;
import sequelize from "../../../db.js";

class DeviceKdlController {
    async getAllKdl(req, res) {
        try {
            const { id } = req.params;

            const listKdl = await Models.MainAddMeter.findAll({
                where: {
                    objectBuildId: id,
                },
                attributes: [
                    [
                        Sequelize.fn("DISTINCT", Sequelize.col("numberKdl")),
                        "numberKdl",
                    ],
                ],
            });

            return res.json({ listKdl });
        } catch (e) {
            console.log(e);
        }
    }
}

export default new DeviceKdlController();
