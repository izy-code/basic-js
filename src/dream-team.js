/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!(members instanceof Array)) {
    return false;
  }

  let namesFirstChars = [];

  members.forEach(member => {
    if (typeof member === 'string') {
      const trimmedMemberName = member.trimStart();

      namesFirstChars.push(trimmedMemberName[0].toUpperCase());
    }
  });

  namesFirstChars.sort();

  return namesFirstChars.join('');
}

module.exports = {
  createDreamTeam
};
