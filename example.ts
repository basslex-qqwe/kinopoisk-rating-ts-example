import { KinopoiskRating, Rating } from 'kinopoisk-rating';

async function getRatingExample(): Promise<void> {
    try {
        // ID фильма "Властелин колец: Братство кольца"
        const movieId = 328;
        const rating: Rating = await KinopoiskRating.getRating(movieId);
        
        console.log('Рейтинги фильма:');
        console.log('----------------');
        console.log('Кинопоиск:');
        console.log(`Оценка: ${rating.kp.rating}`);
        console.log(`Голосов: ${rating.kp.votes}`);
        console.log('----------------');
        console.log('IMDb:');
        console.log(`Оценка: ${rating.imdb.rating}`);
        console.log(`Голосов: ${rating.imdb.votes}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error('Произошла ошибка:', error.message);
        }
    }
}

getRatingExample();