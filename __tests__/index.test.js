const fizzbuzz = require ('../src/index.js');


test('Si el numero es divisible entre 3 retorna Fizz', () => {
  //given
  let number = 3
  //when
  let result = fizzbuzz(number)
  //then
  expect(result).toBe('Fizz')
})

test('Si el numero es divisible entre 5 retorna Bizz', () => {
  //given
  let number = 5
  //when
  let result = fizzbuzz(number)
  //then
  expect(result).toBe('Buzz')
})

test('Si el numero es divisible entre 3 y 5 retorna FizzBuzz', () => {
  //given
  let number = 15
  //when
  let result = fizzbuzz(number)
  //then
  expect(result).toBe('FizzBuzz')
})

test('Si el numero no es divisible entre 3 y 5 retorna el numero', () => {
  //given
  let number = 1
  //when
  let result = fizzbuzz(number)
  //then
  expect(result).toBe(1)
})

//fizzbuz es una cata o ejercicio para aprender
// a hacer testeo dentro de nuestro codigo 