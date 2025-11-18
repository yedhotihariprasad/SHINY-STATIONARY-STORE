const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema({
  user: Object,
  items: Array,
  paymentId: String,
});
module.exports = mongoose.model("Order", OrderSchema);
