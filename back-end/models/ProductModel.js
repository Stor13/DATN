import { Sequelize, UUID } from "sequelize";
import db from "../config/database";
import Users from "./UserModel";
const [dataType] = Sequelize;
const Products = db.define('users',{
    UUID:{
        type: dataType.STRING,
        defaultValue: dataType.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true, 
        }
    },
    name:{
        type: dataType.STRING,
        allowNull: false,
        validate: {
            notEmpty: true, 
            len: [3,100]
        }
    },
    description:{
        type: dataType.STRING,
        allowNull: false,
        validate: {
            notEmpty: true, 
        }
    },
    price:{
        type: dataType.FLOAT,
        allowNull: false,
        validate: {
            notEmpty: true, 
        }
    },
    UID:{
        type: dataType.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true, 
        }
    },
    
},{
    freezeTableName: true
})

Users.hasMany(Products);
Products.belongsTo(Users, {foreignKey:'UID'});


export default Products;