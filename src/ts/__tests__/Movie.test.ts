import Movie from "../domain/Movie";

test('create new Movie', () => {
   const result = new Movie(3, 'Мстители', 'The Avengers', 2012,  'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '137 мин. / 02:17', 500);
   const expected = {
        id: 3,
        name: 'Мстители',
        originName: 'The Avengers',
        year: 2012,
        country: 'США',
        tagline: 'Avengers Assemble!',
        genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'],
        time: '137 мин. / 02:17',
        price: 500,
   }
   expect(result).toEqual(expected);

});