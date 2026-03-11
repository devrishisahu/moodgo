import express from "express"
import adminController from "../controllers/adminController.js"
import protect from "../middleware/authMiddleware.js"

const router = express.Router()


router.get ("/users",protect.forAdmin , adminController.getAllUsers)
router.get ("/events",protect.forAdmin , adminController.getAllEvents)
router.put ("/events/:eid",protect.forAdmin , adminController.updateEvent)
router.get ("/orders",protect.forAdmin , adminController.getAllOrders)
router.get ("/ratings",protect.forAdmin , adminController.getAllRatings)
router.get ("/coupons",protect.forAdmin , adminController.getAllCoupons)


export default router
