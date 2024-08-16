import { Request, Response } from "express";
import Loan from "../models/Loan";

export const applyForLoan = async (req: Request, res: Response) => {
  const { userId, amount, interestRate, durationMonths } = req.body;
  try {
    const newLoan = new Loan({
      user: userId,
      amount,
      interestRate,
      durationMonths,
      status: "pending",
    });

    await newLoan.save();
    res
      .status(201)
      .json({ message: "Loan application submitted", loan: newLoan });
  } catch (error) {
    res.status(500).json({ message: "Failed to apply for loan", error });
  }
};

export const viewLoanStatus = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const loans = await Loan.find({ user: userId });
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch loan status", error });
  }
};
