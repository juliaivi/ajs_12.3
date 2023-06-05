import Cart, {instanceOfCountable} from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book'; 
import MusicAlbum from '../domain/MusicAlbum';
import Mobiel from '../domain/Mobiel';


test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

  test('testing the instanceOfCountable function, receiving true', () => {
    const cart = new Cart();
    cart.add(new Book(6, 'War and Piece', 'Leo Tolstoy', 2000, 1200));
    let result = instanceOfCountable(cart);
    expect(result).toBeFalsy();
  });

  test('testing the instanceOfCountable function, receiving false', () => {
    const cart = new Cart();
    cart.add(new Mobiel(6, 'telechon', 'Aplle', 500, 1));
    let result = instanceOfCountable(cart);
    expect(result).toBeTruthy();
  });

  test('wrong type', () => {
    const cart = new Cart();
    cart.add(new Mobiel(6, 'telechon', 'Aplle', 500, 1));
    expect(cart.add(new Book(6, 'War and Piece', 'Leo Tolstoy', 2000, 1200))).toThrow();
  });

test('adding 3 elements to an array', () => {
  const cart = new Cart();
  cart.add(new Mobiel(6, 'telechon', 'Aplle', 500, 1));
  cart.add(new MusicAlbum(1011, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(4, 'Мстители', 'The Avengers', 2015,  'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '167 мин. / 02:17', 1000));
  expect(cart.items.length).toBe(3);
});
  
test('price of goods without discount', () => {
  const cart = new Cart();
  cart.add(new Mobiel(6, 'telechon', 'Aplle', 500, 1));
  cart.add(new MusicAlbum(1011, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(4, 'Мстители', 'The Avengers', 2015,  'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '167 мин. / 02:17', 1000));
  expect(cart.totalCost()).toBe(2400);
})

test('price of goods at a discount', () => {
  const cart = new Cart();
  cart.add(new Mobiel(6, 'telechon', 'Aplle', 500, 1));
  cart.add(new MusicAlbum(1011, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(4, 'Мстители', 'The Avengers', 2015,  'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '167 мин. / 02:17', 1000));
  expect(cart.discountPrice(0.2)).toBe(1920);
})

test('', () => {
  const cart = new Cart();
  cart.add(new Mobiel(6, 'telechon', 'Aplle', 500, 1));
  cart.add(new MusicAlbum(1011, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(4, 'Мстители', 'The Avengers', 2015,  'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '167 мин. / 02:17', 1000));
  cart.add(new Book(3, 'War and Piece', 'Leo Tolstoy', 2000, 1200));
  cart.deleteItem(3);
  expect(cart.items.length).toBe(3);
})

test('product removal', () => {
  const cart = new Cart();
  const expected = [{id: 6, name: 'telechon', company: 'Aplle', price: 500, quantity: 1}]
  cart.add(new Mobiel(6, 'telechon', 'Aplle', 500, 1));
  cart.add(new Mobiel(6, 'telechon', 'Aplle', 500, 1));
  cart.add(new MusicAlbum(1011, 'Meteora', 'Linkin Park', 900));
  cart.deleteItem(1011);
  cart.deleteItem(6);
  expect(cart.items.length).toBe(1);
  expect(cart.items).toEqual(expected);
});


