#!/usr/bin/env node

const person = {
  firstName: 'Ronald',
  sureName: 'Rivero',
  country: 'Uruguay',
  gender: 'Male',
  age: 42,
  email: 'ralexrivero@gmail.com',
  progLanguages: ['C', 'Python', 'JavaScript', 'SQL'],
  stack: ['node', 'Django', 'Docker', 'bash', 'git', 'GitHub'],
  languages: ['es', 'en'],
  set lang (lang) {
    this.languages.push(lang.toUpperCase());
  },
  get lang () {
    return this.languages.map(function (elem) {
      return elem.toUpperCase();
    });
  },
  get fullName () {
    return `${this.firstName} ${this.sureName}`;
  }
};

/* console.log(person);
console.log(person.fullName);
 */

console.log(person.lang);
person.lang = 'fr';
console.log(person.languages);
