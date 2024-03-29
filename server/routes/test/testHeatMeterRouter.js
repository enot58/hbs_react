import express from "express";
const router = express.Router();
import testHeatMeterController from "../../controller/test/testHeatMeterController.js";

router.post("/", testHeatMeterController.addNewMeter);
router.get("/", testHeatMeterController.getAllHeatMeters);
router.get(
    "/getAllMeters",
    testHeatMeterController.getExcelAllHeatMeterInObject
);
router.get(
    "/getForOffline/:id",
    testHeatMeterController.getAllHeatMetersForOffline
);
router.post("/addAllMetersExcel", testHeatMeterController.addAllMetersInObject);
router.post("/sendForOffline/:id", testHeatMeterController.addOrUpdateMeter);
router.get("/line", testHeatMeterController.getAllLines);
router.get("/getHeatTemplate", testHeatMeterController.getTemplateHeat);
router.get("/search", testHeatMeterController.searchByNumber);
router.delete("/:id", testHeatMeterController.deleteMeter);
router.post("/:id", testHeatMeterController.editHeatMeterById);

export default router;
