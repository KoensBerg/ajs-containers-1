import Bowman from '../Bowman';
import Swordsman from '../Swordsman';
import Team from '../Team';

// - - - - - - - - - - - - - - - - - - - - - - - - - -
// Если игрок уже добавлен в команду, выбросит ошибку
// - - - - - - - - - - - - - - - - - - - - - - - - - -
test('throws on incorrect character addition', () => {
  const Max = new Swordsman('Max');
  const newTeam = new Team();

  newTeam.add(Max); // добавили игрока в команду

  const received = () => newTeam.add(Max); // добавили повторно
  const expected = 'Этот персонаж уже был добавлен в команду';

  expect(received).toThrow(expected);
});

// - - - - - - - - - - - - - - - - - - - - - - -
// Последовательно добавляем уникальных игроков
// - - - - - - - - - - - - - - - - - - - - - - -
test('should receive a set of three objects', () => {
  const Rob = new Bowman('Rob');
  const Tim = new Bowman('Tim');
  const Max = new Swordsman('Max');

  const newTeam = new Team();

  newTeam.add(Rob);
  newTeam.add(Tim);
  newTeam.add(Max);

  const received = newTeam.members.size; // размер Set
  const expected = 3; // в Set находится три объекта

  expect(received).toBe(expected);
});

// - - - - - - - - - - - - - - - - - - - - - - - - - -
// Добавляем игроков одной строкой, включая одинаковых
// - - - - - - - - - - - - - - - - - - - - - - - - - -
test('should add identical characters without error', () => {
  const Rob = new Bowman('Rob');
  const Tim = new Bowman('Tim');
  const Max = new Swordsman('Max');

  const newTeam = new Team();
  newTeam.addAll(Rob, Tim, Tim, Max); // попытка добавить четырёх игроков

  const received = newTeam.members.size; // размер Set
  const expected = 3; // в Set находится три объекта

  expect(received).toBe(expected);
});

// - - - - - - - - - - - - - - - - - -
// Преобразуем Set в массив объектов
// - - - - - - - - - - - - - - - - - -
test('should receive array of objects', () => {
  const Rob = new Bowman('Rob');
  const Tim = new Bowman('Tim');
  const Max = new Swordsman('Max');

  const newTeam = new Team();
  newTeam.addAll(Rob, Tim, Max);

  const received = newTeam.toArray(); // преобразуем в массив
  const expected = [Rob, Tim, Max]; // массив из трёх объектов

  expect(received).toStrictEqual(expected);
});
