
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'Wood', description: 'a sturdy piece of wood'},
        {name: 'money', description: 'fiat currency that is backed by the government'},
        {name: 'Human'}
      ]);
    });
};
