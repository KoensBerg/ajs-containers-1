export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(person) {
    this.members.forEach((item) => {
      if (item === person) {
        throw new Error('Этот персонаж уже был добавлен в команду');
      }
    });

    this.members.add(person);
  }

  addAll(...person) {
    person.forEach((item) => this.members.add(item));
  }

  toArray() {
    const result = [];
    this.members.forEach((item) => result.push(item));

    return result;
  }
}
