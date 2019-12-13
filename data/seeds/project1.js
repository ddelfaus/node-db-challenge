exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Build a house', description: 'Need a house', completed: false},
        {name: 'Paying Taxes', description: 'got to pay taxes or get thrown in jail', completed: false},
        {name: 'Making a game', completed: false}
      ]);
    });
};
