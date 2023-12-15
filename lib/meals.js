import sql from 'better-sqlite3';

const db = sql('meals.db');

const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2500));

  // throw new Error('Something went wrong');
  return db.prepare('SELECT * FROM meals').all();
};

const getMeal = async (slug) => {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
};

export { getMeal, getMeals };
