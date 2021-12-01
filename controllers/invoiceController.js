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
    res.status(201).send("New Invoice Created");
  } catch (err) {
    throw new Error("Failed creating new invoice");
  }
};

exports.updateInvoice = async (req, res) => {
  try {
    await Invoice.updateOne(
      { id: req.body.id },
      {
        $set: {
          id: req.body.id,
          adress: req.body.adress,
          city: req.body.city,
          postCode: req.body.postCode,
          country: req.body.country,
          clientName: req.body.clientName,
          clientEmail: req.body.clientEmail,
          clientAdress: req.body.clientAdress,
          clientCity: req.body.clientCity,
          clientPostCode: req.body.clientPostCode,
          clientCountry: req.body.clientCountry,
          invoiceDate: req.body.invoiceDate,
          invoiceDue: req.body.invoiceDue,
          paymentTerm: req.body.paymentTerm,
          projectDesc: req.body.projectDesc,
          projects: req.body.projects,
          totalPrice: req.body.totalPrice,
          status: req.body.status,
        },
      }
    );
    res.status(200).send("Invoice Updated");
  } catch (err) {
    throw new Error("Failed creating new invoice");
  }
};

exports.deleteInvoice = async (req, res) => {
  try {
    await Invoice.deleteOne({ id: req.body.id });
    res.status(200).send("Invoice Deleted");
  } catch (err) {
    throw new Error("Failed deleting the invoice");
  }
};

exports.markAsPaid = async (req, res) => {
  try {
    await Invoice.updateOne(
      { id: req.body.id },
      {
        $set: {
          status: "Paid",
        },
      }
    );
    res.status(200).send("Invoice Marked As Paid");
  } catch (err) {
    throw new Error("Failed marking the invoice as Paid");
  }
};
