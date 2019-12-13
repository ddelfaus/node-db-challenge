const db = require('../data/dp-config')





module.exports = {
   getProjects,
   getResources,
   getTasks,
   getTaskAll,
   addProject,
   addResource,
   addTask
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
function getTaskAll() {
    return db('Tasks')
}

function addProject(project) {
    return db
    .insert(project, 'id')
    .into('projects')
}

function addResource(resource) {
    return db
    .insert(resource, 'id')
    .into('resources')
}

function addTask(task,id) {
    return db
    .insert(task, 'id')
    .into('Tasks')
    .where({project_id: id})

}