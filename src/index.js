'use strict';
const zero = 0;
const films = [
    {
        movieTitle: 'Yes Man',
        movieGenre: 'Comedy',
        movieYear: 2008
    },
    {
        movieTitle: 'Joker',
        movieGenre: 'Crime',
        movieYear: 2019
    },
    {
        movieTitle: 'Interstellar',
        movieGenre: 'Adventure',
        movieYear: 2014
    },
    {
        movieTitle: 'Legend',
        movieGenre: 'Crime',
        movieYear: 2015
    },
    {
        movieTitle: 'Inception',
        movieGenre: 'Adventure',
        movieYear: 2010
    },
    {
        movieTitle: 'All the Money in the World',
        movieGenre: 'Crime',
        movieYear: 2017
    },
    {
        movieTitle: 'The Hangover',
        movieGenre: 'Comedy',
        movieYear: 2009
    },
    {
        movieTitle: 'The Avengers',
        movieGenre: 'Adventure',
        movieYear: 2012
    },
    {
        movieTitle: 'Avatar',
        movieGenre: 'Adventure',
        movieYear: 2009
    },
];

const arrayToObject = (data) => {

    const dataObj = data.reduce((prev, { movieGenre, movieTitle, movieYear }) => {

        (prev[movieGenre])
            ?
            prev[movieGenre].push(
                {
                    title: movieTitle,
                    year: movieYear
                }
            )

            :
            prev[movieGenre] = [{
                title: movieTitle,
                year: movieYear
            }];

        return prev;

    }, {});

    return dataObj;

};
const result = arrayToObject(films);

result[Symbol.iterator] = function () {
    const categories = Object.values(this);

    let index = zero;
    let indexCategories = zero;

    return {
        next() {
            if (index === categories[indexCategories].length) {
                indexCategories++;
                index = zero;
            }

            if (indexCategories === categories.length) {
                return { done: true };
            }

            return {
                done: false,
                value: categories[indexCategories][index++]
            };
        }
    };
};

console.log(result); // eslint-disable-line no-console

for (const film of result) {
    console.log(film); // eslint-disable-line no-console
}
