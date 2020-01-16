const express = require ('express');
const router = express.Router();
const User = require('../models/user-models');
const Property = require('../models/property-model')

// get a list of all properties
router.get('/', function(req, res, next){
    Property.find({}).then(function(properties){
        res.json(properties);
    }).catch(next);
});

// add a new property to the database
router.post('/', function(req, res, next){
    Property.create(req.body).then(function(prop){
        res.send(prop);
    }).catch(next);
});

// edit a property, with the specified properties ID in the URL
router.put('/:prop', function(req, res, next){
    Property.findByIdAndUpdate({_id: req.params.prop}, req.body, {new: true}).then(function(prop){
        res.send(prop);
    }).catch(next);
});

// delete a property
router.delete('/:prop', function(req, res, next){
    Property.findByIdAndRemove({_id: req.params.prop}).then(function(prop){
        res.send(prop);
    }).catch(next);
});

// get a single property
router.get('/:prop', function(req, res, next){
    //console.log(req.params.prop.substring(1));
    Property.findById({_id: req.params.prop.substring(1)}).then(function(prop){
        res.send(prop);
    }).catch(next);
});

module.exports = router;