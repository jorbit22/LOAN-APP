import express from "express";
import {
  makeRepayment,
  viewRepaymentSchedule,
} from "../controllers/repaymentController";

const router = express.Router();

router.post("/make", makeRepayment);
router.get("/schedule/:loanId", viewRepaymentSchedule);

export default router;
