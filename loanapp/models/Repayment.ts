import { Schema, model, Document } from "mongoose";

interface IRepayment extends Document {
  loan: Schema.Types.ObjectId;
  amount: number;
  paymentDate: Date;
}

const RepaymentSchema = new Schema<IRepayment>({
  loan: { type: Schema.Types.ObjectId, ref: "Loan", required: true },
  amount: { type: Number, required: true },
  paymentDate: { type: Date, required: true },
});

export default model<IRepayment>("Repayment", RepaymentSchema);
