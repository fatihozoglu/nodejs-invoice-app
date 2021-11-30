const router = require("express").Router();
const {
  getAllInvoices,
  createInvoice,
} = require("../controllers/invoiceController");

router.get("/", getAllInvoices);
router.post("/", createInvoice);

module.exports = router;
