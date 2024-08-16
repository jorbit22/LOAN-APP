import express from "express";
import { applyForLoan, viewLoanStatus } from "../controllers/loanController";

const router = express.Router();

router.post("/apply", applyForLoan);
router.get("/status/:userId", viewLoanStatus);

export default router;
