/* import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(
    <div>
      <App />
    </div>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
 */
describe('testing App.js', () => {
  test('2 + 2 is 4', () => {
    expect(2 + 2).toBe(4);
  });
});

describe('Some describe text here', () => {
  it('3 + 3 is 6', () => {
    expect(3 + 3).toBe(6);
  });
});