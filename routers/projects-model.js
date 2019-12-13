const db = require('../data/dp-config')





module.exports = {
   getProjects,
   getResources,
   getTasks
}


function getProjects() {
    return db('projects')
    
}


function getResources() {
    return db('resources')
    
}

function getTasks() {
    return db('Tasks')
    .select('projects.name','projects.description', 'Tasks.completed', 'Tasks.description', 'Tasks.notes')
    .join('projects', 'Tasks.project_id', 'projects.id')

}
