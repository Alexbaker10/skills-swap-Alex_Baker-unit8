const { filterSkillsByCategory } = require('../skillswap-functions');

describe('filterSkillsByCategory', () => {
  const skills = [
    { title: 'Python', category: 'Programming', price: 20 },
    { title: 'Guitar', category: 'Music', price: 15 },
  ];

  it('filters skills by specific category', () => {
    expect(filterSkillsByCategory(skills, 'Programming')).toEqual([skills[0]]);
  });

  it('returns all skills when category is All', () => {
    expect(filterSkillsByCategory(skills, 'All')).toEqual(skills);
  });

  it('returns an empty array when no matches are found', () => {
    expect(filterSkillsByCategory(skills, 'Cooking')).toEqual([]);
  });
});