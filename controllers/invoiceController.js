const Invoice = require("../models/Invoice");

exports.getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.status(200).json(invoices);
  } catch (err) {
    throw new Error("Failed getting the invoices");
  }
};

exports.createInvoice = async (req, res) => {
  try {
    await Invoice.create(req.body);
    res.status(201).json({ status: "Created" });
  } catch (err) {
    throw new Error("Failed creating new invoice");
  }
};
