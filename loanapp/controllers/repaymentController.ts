import { Request, Response } from "express";
import Repayment from "../models/Repayment";
import Loan from "../models/Loan";

export const makeRepayment = async (req: Request, res: Response) => {
  const { loanId, amount } = req.body;
  try {
    const loan = await Loan.findById(loanId);
    if (!loan) {
      return res.status(404).json({ message: "Loan not found" });
    }

    const newRepayment = new Repayment({
      loan: loanId,
      amount,
      paymentDate: new Date(),
    });

    await newRepayment.save();
    res
      .status(201)
      .json({ message: "Repayment successful", repayment: newRepayment });
  } catch (error) {
    res.status(500).json({ message: "Failed to process repayment", error });
  }
};

export const viewRepaymentSchedule = async (req: Request, res: Response) => {
  const { loanId } = req.params;
  try {
    const repayments = await Repayment.find({ loan: loanId });
    res.status(200).json(repayments);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch repayment schedule", error });
  }
};
