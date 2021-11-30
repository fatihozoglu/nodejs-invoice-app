const router = require("express").Router();
const {
  getAllInvoices,
  createInvoice,
  updateInvoice,
} = require("../controllers/invoiceController");

router.get("/", getAllInvoices);
router.post("/", createInvoice);
router.put("/", updateInvoice);

module.exports = router;
