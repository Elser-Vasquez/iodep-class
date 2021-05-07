const Device = require('../models/device.model');

const apiCtrl = {}

apiCtrl.renderAdd = async (req, res) => {
    const { name, description } = req.body;
    
    const device = new Device({
        name,
        description
    });

    await device.save();

    
    res.json({
        "status": "dispocitivo agregado correctamente",
        device
    });
};

apiCtrl.renderAll = async (req, res) => {

    const devices = await Device.find();
  
    res.json({
        devices
    });
};

apiCtrl.renderUpdate = async (req, res) => {
    const new_id = req.params.id;
    const { name, description } = req.body;
    

    const new_devices = await Device.updateOne({_id: new_id}, {$set: {name, description}});
    console.log(new_devices);
 
    res.json({
        new_devices
    });
};

apiCtrl.renderDelete = async (req, res) => {
    const new_id = req.params.id;
    const device = await Device.deleteOne({_id: new_id});
    console.log(device)
    res.json({
        device
    });
};



module.exports = apiCtrl;