import React from 'react';
import {act, render} from '@testing-library/react';
import App, {QUERY} from './App';
import { MockedProvider } from '@apollo/client/testing'
import wait from 'waait'
const mocks = [{
  request: {
    query: QUERY
  },
  result: {
    data: {
      user: {
        firstName: "Levino",
        lastName: "Levino"
      }
    }
  }
}]

test('renders learn react link', async () => {
  const { getByText } = render(<MockedProvider mocks={mocks} addTypename={false}><App /></MockedProvider>);
  await act(async () => {
    await wait(0)
  })
  const userName = getByText(/Levino/i);
  expect(userName).toBeInTheDocument();
});
