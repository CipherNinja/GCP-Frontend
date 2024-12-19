// server/models/product.models.js

const { DataTypes } = require("sequelize");

const { sequelize } = require("../db");

// "Product" model
const ProductModel = sequelize.define("Product", {
    id: {
        type: DataTypes.INTEGER,      
        autoIncrement: true,          
        primaryKey: true,             
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    stock: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mrp: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    original_price: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categories: {
        type: DataTypes.JSON, 
        allowNull: false,
    },
    images: {
        type: DataTypes.JSON, 
        allowNull: false,
    },
},
{
    timestamps: true, 
}
);

module.exports = ProductModel; 
