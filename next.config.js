require('dotenv').config();

const setApiUrl = ( mode ) => {
  const mapModeToApiUrl = {
      LOCAL: "http://localhost:3000/",
      STAGE: "http://3.36.124.157/"
  }
  return mapModeToApiUrl[mode];
} 

module.exports = {
  env: {
    MODE: process.env.MODE,
    IS_DEBUG: ( process.env.MODE === 'LOCAL' ),
    API_URL: setApiUrl( process.env.MODE )
  }
}
