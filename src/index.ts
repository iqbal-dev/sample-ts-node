/**
 * Required External Modules
 */
import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import helmet from "helmet";

dotenv.config();
/**
 * App Variables
 */

const PORT: number = 3000;

const app = express();
/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
/**
 * Server Activation
 */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
