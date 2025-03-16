import express from "express"
import bookRoute from "./book/infra/ExpressBookController";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use("/api/book", bookRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/`);}
);