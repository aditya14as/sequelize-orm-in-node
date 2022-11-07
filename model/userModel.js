const { Sequelize,DataTypes } = require('sequelize');
// Option 1: Passing a connection URI
const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
  const connectDB = async function(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }
  connectDB()

const User = sequelize.define('User', {
  // Model attributes are defined here
  username: {
    type: DataTypes.STRING,

    allowNull: false
  },
 fullname: {
    type: DataTypes.STRING
  }
});
const save = async ()=>{
    await sequelize.sync({ force: true });
    console.log("All models were synchronized successfully.");
}
save();

module.exports = {connectDB,User,save};
  
  