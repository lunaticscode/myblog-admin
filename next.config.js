const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = ( phase, { defaultConfig } ) => {
    
    if ( phase === PHASE_DEVELOPMENT_SERVER ) {
        return {
          env: {
            IS_DEBUG: true,
          }
        }
      }
      return {
        env: {
          IS_DEBUG: false,
        }
      }
}