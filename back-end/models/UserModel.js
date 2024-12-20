import { Sequelize, UUID } from "sequelize";
import db from "../config/database";
const [dataType] = Sequelize;
const Users = db.define('users',{
    UUID:{
        type: dataType.STRING,
        defaultValue: dataType.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true, 
        }
    },
    username:{
        type: dataType.STRING,
        allowNull: false,
        validate: {
            notEmpty: true, 
            len: [3,100]
        }
    },
    password:{
        type: dataType.STRING,
        allowNull: false,
        validate: {
            notEmpty: true, 
            len: [3,20]
        }
    },
    username:{
        type: dataType.STRING,
        allowNull: false,
        validate: {
            notEmpty: true, 
            len: [3,20]
        }
    },


    
},{
    freezeTableName: true
})

export default Users;