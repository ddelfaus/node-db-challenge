const express = require('express');

const Project = require('./projects-model')

const router = express.Router();


router.get('/', (req, res) => {
    Project
    
    .getProjects()
    .then(projects => {
       
       const newProjects = []
       
        projects.forEach(e => {
            if(e.completed === 0){
                e = {...e, completed: false}
                newProjects.push(e)
            } else {
                e = {...e, completed: true}
                newProjects.push(e)
            }
        })
      res.json(newProjects)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get project' });
    });
  });


router.get('/resources', (req,res)=> {
    Project.getResources()

    .then(resource => {
        res.json(resource)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get resource' });
      });
})




router.get('/tasks', (req,res)=> {
    Project.getTasks()


    .then(tasks => {

        const newTask =[]

        tasks.forEach(e => {
            if(e.completed === 0) {
                e = {...e, completed:false}
                newTask.push(e)
            }else {
                e = {...e, completed:true}
            }
        })

        res.json(newTask)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get tasks' });
      });
})






  module.exports = router;


//   .then(project => {
//     if(project.project_completed === 0){
//         project = {...project, project_completed: false}
//     }else{
//         project = {...project, project_completed: true}
//     }
//   res.json(project)
// })