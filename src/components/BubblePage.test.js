import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { fetchBubbles as mockFetchBubbles} from '../api/fetchBubbles'
import BubblePage from "./BubblePage";

jest.mock('../api/fetchBubbles')

const sampleBubble = [
  {
  code: {hex: "#f0f8ff"},
  color: 'aliceblue2',
  id:11
}
]

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage/>)
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  render(<BubblePage/>)
  mockFetchBubbles.mockResolvedValue({
    data: sampleBubble
  })
  
  await waitFor( () => {
    expect(sampleBubble).toHaveLength(1)
  } ) 
 

});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading