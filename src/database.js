const mongoose = require('mongoose');
require('dotenv').config();

console.log(process.env.TEST);
console.log(process.env.MONGODB_URI);

    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error('MONGODB_URI is not defined');
    }
    
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a la base de datos MongoDB Atlas.'))
    .catch((error) => console.error(error))

console.log(process.env.TEST); 

