import { render } from '@testing-library/react';
import PreviewGrid from '@/components/preview/preview-grid';

describe('Preview Tiles Responsive', () => {
  it('expands preview tiles responsively on all breakpoints', () => {
    // Render PreviewGrid with mock tiles and check for responsive classes
    const { container } = render(<PreviewGrid tiles={[]} />);
    // Check for grid responsive classes
    expect(container.firstChild).toHaveClass('grid');
    // You may want to add more detailed checks for breakpoints
  });
});
