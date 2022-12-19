import Sequelize from 'sequelize';
let db = new Sequelize('teamDB','root','root',{
host: 'localhost',
dialect: 'mysql'
})
export default db;