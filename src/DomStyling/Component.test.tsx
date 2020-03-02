import React from 'react';
import { render } from '@testing-library/react';

import Tag from './Component';

describe("DOM Styling tests", () => {
    test("with SYS prefix", () => {
        const { getByTestId } = render(<Tag content="SYS:Some message" />);
        const el = getByTestId("tag");
        expect(el).toHaveClass("sys");
        expect(el).toHaveTextContent("Some message");
    });

    test("with RANDOM prefix", () => {
        const { getByTestId } = render(<Tag content="RanDOM:Another random message" />);
        const el = getByTestId("tag");
        expect(el).toHaveClass("random");
        expect(el).toHaveTextContent("Another random message");
    });

    test("without prefix", () => {
        const { getByTestId } = render(<Tag content="Message without any prefix" />);
        const el = getByTestId("tag");
        expect(el).toHaveTextContent("Message without any prefix");
    });
});
  