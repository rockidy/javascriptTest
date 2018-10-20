const horse = {
  name: 'Topher ',
  size: 'large',
  skills: ['jousting', 'racing'],
  age: 7
};

// Bad String code
let bio = horse.name + ' is a ' + horse.size + ' horse skilled in ' + horse.skills.join(' & ');
console.log(">>>>>>>>>>" + bio);
// Good String Code
const { name, size, skills } = horse;
bio = '${name} is a ${size} skilled in ${skills.join(' & ')}';
console.log(">>>>>>>>>>" + name);

function horseAge(str, age) {
  const ageStr = age > 5 ? 'old' : 'young';
}
