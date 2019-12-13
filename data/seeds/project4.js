
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Tasks').insert([
        { description: 'build the foundation', notes: 'need more wood', completed: false, project_id: 1},
        { description: 'build the walls', notes: 'need even more wood', completed: false, project_id: 1},
        { description: 'hire an accountant', completed: false, project_id: 2},
        { description: 'list your income', completed: false, project_id: 2},
        { description: 'hire programmers', notes: 'need to be dirt cheap', completed: false, project_id: 3},
        { description: 'plan', completed: false, project_id: 3}
      ]);
    });
};
