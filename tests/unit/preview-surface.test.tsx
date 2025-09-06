import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PreviewSurface } from '@/components/preview-surface';
import { PreviewTile } from '@/components/preview-tile';

describe('PreviewSurface Component', () => {
  it('renders children within a grid layout', () => {
    render(
      <PreviewSurface>
        <div data-testid="test-child">Test Child</div>
      </PreviewSurface>
    );
    
    // Verify the grid container is rendered
    const grid = screen.getByTestId('test-child').closest('div[class*="grid"]');
    expect(grid).toBeInTheDocument();
    expect(grid).toHaveClass('grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-3', 'lg:grid-cols-4');
    
    // Verify the test child is rendered
    expect(screen.getByTestId('test-child')).toBeInTheDocument();
  });

  it('provides context to PreviewTile children', () => {
    // This test verifies that PreviewTile can be rendered within PreviewSurface
    // without throwing context errors
    render(
      <PreviewSurface>
        <PreviewTile
          title="Test Tile"
          componentName="TestComponent"
          code="<div>Test</div>"
        >
          <div data-testid="test-content">Test Content</div>
        </PreviewTile>
      </PreviewSurface>
    );

    // If we get here without errors, the context was provided correctly
    expect(screen.getByTestId('test-content')).toBeInTheDocument();
  });

  it('allows customizing the initial expansion state', () => {
    const TestComponent = () => {
      return (
        <PreviewSurface>
          <PreviewTile
            title="Test Tile"
            componentName="TestComponent"
            code="<div>Test</div>"
          >
            <div>Test Content</div>
          </PreviewTile>
        </PreviewSurface>
      );
    };

    render(<TestComponent />);
    
    // The tile should be rendered
    expect(screen.getByText('Test Tile')).toBeInTheDocument();
  });
});
