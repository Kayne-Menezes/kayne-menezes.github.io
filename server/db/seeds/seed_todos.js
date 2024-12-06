/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('tasks').del()
  await knex('tasks').insert([
    { name: 'Laundry', status: false },
    { name: 'Dishes', status: true },
  ])
}
