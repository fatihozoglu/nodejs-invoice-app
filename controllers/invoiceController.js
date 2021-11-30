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
    res.send("updated");
  } catch (err) {
    throw new Error("Failed creating new invoice");
  }
};
