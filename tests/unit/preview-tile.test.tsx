import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { PreviewTile } from '@/components/preview/preview-tile';
import { PreviewTileExpansionContext } from '@/app/design/layout-client';

// Test component that properly wraps PreviewTile with expansion context
const TestComponent = () => (
  <PreviewTileExpansionContext.Provider value={{ expandedTile: null, setExpandedTile: vi.fn() }}>
    <PreviewTile
      title="Test Tile"
      componentName="TestComponent"
      code="<div>Test</div>"
    >
      <div>Test Content</div>
    </PreviewTile>
  </PreviewTileExpansionContext.Provider>
);

describe('PreviewTile Component', () => {
  it('renders correctly within PreviewSurface', () => {
    render(<TestComponent />);
    
    // Verify the tile renders with correct content
    expect(screen.getByText('Test Tile')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
    
    // Verify controls are present
    expect(screen.getByRole('button', { name: /code/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /customize/i })).toBeInTheDocument();
  });

  it('toggles code visibility', () => {
    render(<TestComponent />);
    
    // Initially code should not be visible
    expect(screen.queryByText(/<div>Test<\/div>/)).not.toBeInTheDocument();
    
    // Click the code button
    const codeButton = screen.getByRole('button', { name: /code/i });
    fireEvent.click(codeButton);
    
    // Code should now be visible
    expect(screen.getByText(/<div>Test<\/div>/)).toBeInTheDocument();
  });

  it('toggles customization panel', () => {
    render(<TestComponent />);
    
    // Initially customization panel should not be visible
    expect(screen.queryByText(/Component Controls/)).not.toBeInTheDocument();
    
    // Click the customize button
    const customizeButton = screen.getByRole('button', { name: /customize/i });
    fireEvent.click(customizeButton);
    
    // Customization panel should now be visible
    expect(screen.getByText(/Component Controls/)).toBeInTheDocument();
  });
});
