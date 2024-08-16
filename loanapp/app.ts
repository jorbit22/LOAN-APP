import express from "express";
import mongoose from "mongoose";
import loanRoutes from "./routes/loanRoutes";
import repaymentRoutes from "./routes/repaymentRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/loans", loanRoutes);
app.use("/api/repayments", repaymentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
