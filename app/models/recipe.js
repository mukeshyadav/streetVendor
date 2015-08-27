var mongoose = require('mongoose');

module.exports = mongoose.model('Recipe', {
	name                    :   {type : String, default: ''},
    category                :   {type: String, default: ''},
    famous                  :   {type: String, default: ''},
    location                :   {type: String, default: ''},
    address                 :   {type: String, default: ''},
    pincode                 :   {type: Number, default: ''},
    tel                     :   {type: Number, default: ''},
    price                   :   {type: Number, default: ''},
    persons                 :   {type: Number, default: ''},
    lat                     :   {type: String, default: ''},
    long                    :   {type: String, default: ''},
    img                     :   {type: String, default: ''}    
});