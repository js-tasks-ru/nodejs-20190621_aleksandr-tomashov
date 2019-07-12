const mongoose = require('mongoose');
const connection = require('../libs/connection');

const subCategorySchema = new mongoose.Schema({
  title: { type: String,  required: true }
});

const categorySchema = new mongoose.Schema({
  title: { type: String,  required: true },
  subcategories: [ subCategorySchema ]
});

const Category = mongoose.model('Category', categorySchema);
const category = new Category({ 
  title : "Детские товары и игрушки", 
  subcategories: [ 
    {title:'Прогулки и детская комната'},
    {title:'Кормление и гигиена'},
    {title:'Игрушки и развлечения'},
    {title:'Активный отдых и улица'},
    {title:'Радиоуправляемые модели'},
    {title:'Школьные товары'}
  ]    
});



console.log(category)

module.exports = connection.model('Category', categorySchema);
