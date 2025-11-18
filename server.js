const Order = require('./models/Order'); 

app.post('/api/orders', async (req, res) => {
    const order = new Order(req.body);
    await order.save();
    res.json({status:'Order saved', order});
});
