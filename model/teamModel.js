import sequelize from 'sequelize';
import db from "../config/teamConfig.js";

const  { DataTypes } = sequelize;

const teamModel = db.define('ClubInfo', {
    nameOfTeam: {
        type: DataTypes.STRING
    },
    homeOfKitColor: {
        type: DataTypes.STRING
    },
    awayOfKitColor: {
        type: DataTypes.STRING
    },
    numberOfPlayer: {
        type: DataTypes.DOUBLE
    },
    playerFirstName: {
        type: DataTypes.DOUBLE
    },
    playerLastName: {
        type: DataTypes.STRING
    },
    playerAge: {
        type: DataTypes.DOUBLE
    },
    playerCountry: {
        type: DataTypes.STRING
    },
    playerJerseyN: {
        type: DataTypes.DOUBLE
    },
    playerSigningFee: {
        type: DataTypes.DOUBLE
    },
    clubOwnerName: {
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
})

export default teamModel;