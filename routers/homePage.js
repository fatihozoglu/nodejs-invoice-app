const router = require("express").Router();
const {
  getAllInvoices,
  createInvoice,
  updateInvoice,
  deleteInvoice,
  markAsPaid,
} = require("../controllers/invoiceController");

router.get("/", getAllInvoices);
router.post("/", createInvoice);
router.put("/", updateInvoice);
router.delete("/", deleteInvoice);
router.patch("/", markAsPaid);

module.exports = router;
