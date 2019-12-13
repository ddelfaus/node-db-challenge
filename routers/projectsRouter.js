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

router.get('/taskAll', (req, res) => {
    Project
    
    .getTaskAll()
    .then(task => {
       
       const newTasks = []
       
       task.forEach(e => {
            if(e.completed === 0){
                e = {...e, completed: false}
                newTasks.push(e)
            } else {
                e = {...e, completed: true}
                newTasks.push(e)
            }
        })
      res.json(newTasks)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get project' });
    });
  });


router.post('/', (req, res) => {
    const projectData = req.body;
  
    Project.addProject(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new project' });
    });
  });



  router.post('/resources', (req, res) => {
    const resourceData = req.body;
  
    Project.addResource(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
  });



  router.post('/task', (req, res) => {
    const taskData = req.body;
    const id = req.params.id;
    Project.addTask(taskData, id)
    .then(task => {
      res.status(201).json(task);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new task' });
    });
  });




  module.exports = router;


//   .then(project => {
//     if(project.project_completed === 0){
//         project = {...project, project_completed: false}
//     }else{
//         project = {...project, project_completed: true}
//     }
//   res.json(project)
// })