module.exports = function createDreamTeam(members) {
  if (!(members && Array.isArray(members))) return false;
  
  let answer = '';
  
  const correctMembers = members.filter((el) => typeof el === 'string');
  const clearMemebers = correctMembers.map(el => el.trim()[0].toUpperCase() + el.trim().slice(1));
  clearMemebers.sort().forEach((name) => answer += name[0]);

  return answer;
};
