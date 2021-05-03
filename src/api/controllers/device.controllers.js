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


module.exports = apiCtrl;