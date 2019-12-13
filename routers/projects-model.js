const db = require('../data/dp-config')





module.exports = {
   getProjects,
   getResources
}


function getProjects() {
    return db('projects')
    
}


function getResources() {
    return db('resources')
    
}
