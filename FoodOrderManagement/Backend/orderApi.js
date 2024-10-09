const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const Order = require('./orderSchema')

const ConnectString =  "mongodb+srv://smit:smit123@cluster0.tjod1.mongodb.net/OrderManagement"

mongoose.connect(ConnectString).then(() => {
    console.log("Connected With Coude Database")

    const app = express()
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(bodyParser.json());
    app.use(cors())

    //API Routes Here
    //Get ALL
    app.get('/orders', async (req, res) => {
        const ans = await Order.find();
        res.send(ans)
    })

    //Get By ID
    app.get('/orders/:id', async (req,res)=>{
        const ans = await Order.findOne({orderId:req.params.id})
        res.send(ans);
    })

    //Create
    app.post('/orders', async (req, res) => {
        const ans = await Order.create(req.body);
        res.status(201).json({ success: true, message: "user added successfully", data: ans });
    })

    // Delete
    app.delete('/orders/:id', async (req, res) => {
        const ans = await Order.deleteOne({orderId:req.params.id});
        res.status(201).json({ success: true, message: "user deleted successfully", data: ans });
    })

    //Update 
    app.put('/orders/:id', async (req, res) => {
        // console.log(req.body)
        const ans = await Order.findOneAndUpdate({orderId:req.params.id},req.body, {new:true})
        res.status(201).json({ success: true, message: "user updated successfully", data: ans });

    })

    app.listen(8000, () => {
        console.log("Server Started At 8000")
    })
    
})