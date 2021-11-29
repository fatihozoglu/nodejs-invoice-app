const router = require("express").Router();
const home = require("../controllers/invoiceController");

router.get("/", home.getAllInvoices);
router.post("/", home.createInvoice);

module.exports = router;
