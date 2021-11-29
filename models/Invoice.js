const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
  id: String,
  adress: String,
  city: String,
  postCode: String,
  country: String,
  clientName: String,
  clientEmail: String,
  clientAdress: String,
  clientCity: String,
  clientPostCode: String,
  clientCountry: String,
  invoiceDate: Date,
  invoiceDue: Date,
  paymentTerm: String,
  projectDesc: String,
  projects: Array,
  totalPrice: Number,
  status: String,
});

module.exports = mongoose.model("Invoice", InvoiceSchema);
