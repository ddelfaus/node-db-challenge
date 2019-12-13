select projects.name
    , projects.description
    , tasks.completed
    ,  tasks.description
    ,  tasks.notes
from tasks
join projects
    on tasks.project_id = projects.id
