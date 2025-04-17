const age = 30;
let name = 'Amine';
let hasHobbies = false;
age = 20;
function describePerson(age, name, hasHobbies) {
    console.log('My name is ' + name + ' , my age is ' + age + ` , and i ${hasHobbies ? 'have' : 'dont have'} hobbies`);
}

describePerson(age, name, hasHobbies);

