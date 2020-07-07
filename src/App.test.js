import React from 'react';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
  const linkElement = getByText('Please leave us a review on this product');
  expect(linkElement).toBeInTheDocument();
});
