const htCtrl = {}

htCtrl.renderLogin = async (req, res) => {

    const { device, pass } = req.body
    
    res.status(200).json({
        device,
        pass
    });
};



module.exports = htCtrl;