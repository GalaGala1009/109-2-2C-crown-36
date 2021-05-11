const db = require('../utils/database');

const Clothing_36 = class Clothing_36{
    constructor(id, name, cat_id, price, remote_url, local_url){
        this.id = id;
        this.name = name;
        this.cat_id = cat_id;
        this.price = price;
        this.remote_url = remote_url;
        this.local_url = local_url;
    }

    //read
    static fetchAll(){
        return db.execute('SELECT * FROM clothing_36');
    }

    static fetchProductByCategory(cid){
        return db.execute('SELECT * From clothing_36 where cat_id = ?', [cid]);
    }
}

module.exports = Clothing_36;