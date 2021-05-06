const express = require('express');
const router = express.Router();

//items model
const Item = require('../../models/Items');
//@routes Get api
//@description get app items
 //@acess Public
router.get('/',(req,res)=>{
    Item.find()
    .sort({ date:-1 })
    .then(items => res.json(items))

})
//@routes POST api
//@add a item
 //@acess Public

router.post('/',(req,res)=> {
const newItem = new Item({
name: req.body.name
});
newItem.save().then(item => res.json(item))
});

//@routes Delete api:id
//@delete item
 //@acess Public

router.delete('/:id',(req,res)=>{
Item.findById(req.params.id)
.then(item=>item.remove().then(()=> res.
json(
    {
        success:true})))
    .catch(err=>res.status(400).
json
({ success:false }));

 })
 module.exports = router;