import { Router } from "express";
import { syncMidia } from "../controllers/midiaController";

const router = Router();

router.post("/sync-midia", syncMidia);

export default router