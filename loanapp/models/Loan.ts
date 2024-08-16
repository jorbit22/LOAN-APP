import { Schema, model, Document } from "mongoose";

interface ILoan extends Document {
  user: Schema.Types.ObjectId;
  amount: number;
  interestRate: number;
  durationMonths: number;
  status: "pending" | "approved" | "rejected";
  createdAt: Date;
}

const LoanSchema = new Schema<ILoan>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  interestRate: { type: Number, required: true },
  durationMonths: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});

export default model<ILoan>("Loan", LoanSchema);
