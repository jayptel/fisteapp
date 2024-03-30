const mongoose = require('mongoose');

const ProductSchmema = mongoose.Schema(
    {
    name : {
        type: String,
        require:[true, "Please enter product name"],
        
    },
    qty:{
        type: Number,
        require:[true, "Please enter qty number"],
        default:0,
        
    },
    price:{
        type: Number,
        require:[true, "Please enter price number"],
        default:0,
        
    },
    image:{
        type: String,
        require:false,
        
    },
    

    },
    {
        timestamps:true
    }
);

const Product= mongoose.model("Product",ProductSchmema);
module.exports = Product;