import { Router } from "express";
import { getMain, playGame, unknownRoutes } from "./controllers";

const router: Router = Router();

router.get("/", getMain);
router.get("/play/:id", playGame);
router.get("*", unknownRoutes);

export default router;
