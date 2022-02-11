// import paySistem from '../paySystem.js';
import Widjet from '../FormVidjet.js';

// const validator = FormVidjet(paySistem);
const formVidjet = new Widjet(document.querySelector('#form-container'));
formVidjet.bindToDOM();

// document.body.firstElementChild.children[0].length === 2
test('Метод creatButton должен создать и вставить элемент кнопки в DOM', () => {
  /*
  button.creatButton();
  expect(document.querySelector('.component__button')).toBeInstanceOf(HTMLElement);
  */

  // expect(document.body.children[0].innerHTML).toBe(formVidjet.markup());
  // expect(document.body.firstElementChild.innerHTML).toBe(formVidjet.constructor.markup);
  // expect(document.body.firstchildren.innerHTML).toBe(formVidjet.markup);
});
/*
describe('Функция IsValid должен работать корректно', () => {
  test.each([
    ['Тест 1 false', '4561 2612 1234 5464', false],
    ['Тест 2 true', '4561 2612 1234 5467', true],
    ['Тест 3 true', '379791071524836', true],
    ['Тест 4 false', '2222222222222222222', false],
  ])(('Должен быть %s'), (_, input, expected) => {
    expect(input).toBe(expected);
  });
});
*/
