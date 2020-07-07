import { atom } from 'recoil';
import { selector } from 'recoil';

const starRateState = atom({
  key: 'starRateSate',
  default: 0,
});

const reviewState = atom({
  key: 'reviewState',
  default: [],
});

const errorState = atom({
  key: 'errorSate',
  default: null,
});

const averageState = selector({
  key: 'averageState',
  get: ({ get }) => {
    let reviews = get(reviewState);
    let stars = get(starRateState);

    const totalReviews = reviews.length;

    for (let review of reviews) {
      stars += review.score;
    }
    const average = totalReviews === 0 ? 0 : (stars / totalReviews).toFixed(2);
    return average;
  },
});

export { starRateState, reviewState, errorState, averageState };
