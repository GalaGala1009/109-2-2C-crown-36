const Category_36 = require('../models/categoryModels_36');
const Clothing_36 = require('../models/clothingModel_36');

exports.getHomepage = async (req, res) => {
    let data;
    const [rows] = await Category_36.fetchAll();
    data=rows;
    //res.json(data);
    res.render('CROWN2_36', { 
    title: '吳偉政 409417036(async/await)',
    data
    });
  }


  exports.getProductsByCategory = async (req, res) => {
    console.log('req.params', req.params.product);
    let data = {};
    data.cid = 0;
    if(req.params.product ==='hats') data.cid = 1;
    else if (req.params.product ==='jackets') data.cid = 2;
    else if (req.params.product ==='sneakers') data.cid = 3;
    else if (req.params.product ==='womens') data.cid = 4;
    else if (req.params.product ==='mens') data.cid = 5;

    const [rows] = await Clothing_36.fetchProductByCategory(data.cid);
    data.clothing = rows;

    let data2; 
    data2 = data.clothing;

    //res.json(data);
    
    if(req.params.product ==='hats')res.render('hats', {data2});
    else if (req.params.product ==='jackets') res.render('jackets', {data2});
    else if (req.params.product ==='sneakers') res.render('sneakers', {data2});
    else if (req.params.product ==='womens') res.render('womens', {data2});
    else if (req.params.product ==='mens') res.render('mens', {data2});

  }