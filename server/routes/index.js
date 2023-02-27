import express from "express";
const router = express.Router();

import userRouter from "./userRouter.js";
import roleRouter from "./roleRouter.js";
import objectsRouter from "./objects/objectsRouter.js";
import flatsRouter from "./objects/flatsRouter.js";
import floorsRouter from "./objects/floorsRouter.js";
import lineRoutes from "./objects/lineRoutes.js";
import officeRouter from "./objects/officeRouter.js";
import sectionsRouter from "./objects/sectionsRouter.js";


// User
router.use('/user', userRouter)
// Role
router.use('/role', roleRouter)
// Object
router.use('/object', objectsRouter)
//
router.use('/flats', flatsRouter)
router.use('/floors', floorsRouter)
router.use('/line', lineRoutes)
router.use('/office', officeRouter)
router.use('/sections', sectionsRouter)






export default router;
