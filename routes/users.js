const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Order = require('../models/order')

router.get('/', async(req,res) => {
    try{
        const users = await User.find()
        res.json(users)
    }catch(err){
        res.send('Error ' + err)
    }
});

router.get('/totalOrders', async(req,res) => {
    try{
        let users = await User.find()
        let orders = await Order.find()
        for(let i=0; i<users.length; i++) {
            users[i].noOfOrders = 0;
            users[i].averageBillValue = 0;
        }
        for(let j=0; j<orders.length; j++) { 
            for(let i=0; i<users.length; i++) {
                if(users[i].userId ===  orders[j].userId) {
                    users[i].noOfOrders++;
                    users[i].averageBillValue += orders[j].subTotal;
                }
            }
        };
        let ans = []
        for(let user of users) {
            ans.push({
                userId: user.userId,
                name: user.name,
                noOfOrders: user.noOfOrders,
                averageBillValue: Math.floor(user.averageBillValue/user.noOfOrders)
            })
        }
        res.json(ans)
    }catch(err){
        res.send('Error ' + err)
    }
});

router.get('/updateUsers', async(req, res) => {
    try{
        let users = await User.find()
        let orders = await Order.find()
        for(let i=0; i<users.length; i++) {
            users[i].noOfOrders = 0;
        }
        for(let j=0; j<orders.length; j++) { 
            for(let i=0; i<users.length; i++) {
                if(users[i].userId ===  orders[j].userId) {
                    users[i].noOfOrders++;
                }
            }
        };
        let updatedUser = []
        for(let user of users) {
            updatedUser.push(new User({
                userId: user.userId,
                name: user.name,
                noOfOrders: user.noOfOrders
            }))
        }
        for(let user of updatedUser) {
            await User.updateOne({userId:user.userId}, {userId: user.userId, name: user.name, noOfOrders: user.noOfOrders})
        }
        res.json({success: true, message : "Successfully updated"})
    }catch(err){
        res.send('Error ' + err)
    }
})

module.exports = router;