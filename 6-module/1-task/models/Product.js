const mongoose = require('mongoose');
const connection = require('../libs/connection');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category:{ type: mongoose.Types.ObjectId , ref: 'Category', required: true },
  subcategory: { type: mongoose.Types.ObjectId, required: true },
  images: [ String ]
});

const Product = mongoose.model('Product', productSchema);
const product = new Product({
  images: ['...', '...'],
  title: 'Коляска Adamex Barletta 2 in 1',
  description: 'Универсальная модель, которая с легкостью заменит родителям сразу ...',
  price: 21230,
  category: '',
  subcategory:''
})

module.exports = connection.model('Product', productSchema);
