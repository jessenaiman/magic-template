import { render, screen } from '@testing-library/react';
import DesignPage from '@/app/design/buttons/magic/page';

describe('Design Page - Default Customization', () => {
  it('renders with default customization options', () => {
    render(<DesignPage />);
    // Check for a default button or preview tile
    expect(screen.getByText(/Get Unlimited Access|Click me|Magnetic Hover|Spotlight Effect/)).toBeInTheDocument();
  });
});
