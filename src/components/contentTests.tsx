import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Content from '../src/components/Content';
import { useBackgroundStore } from '../src/store/backgroundStore';
import * as Backgrounds from '../src/components/Backgrounds';

// Mock the store
jest.mock('../src/store/backgroundStore', () => ({
  useBackgroundStore: jest.fn(),
}));

// Mock ReactDOMServer
jest.mock('react-dom/server', () => ({
  renderToStaticMarkup: jest.fn().mockReturnValue('<div>Mocked Component</div>'),
}));

describe('Content Component', () => {
  beforeEach(() => {
    // Setup default store mock
    (useBackgroundStore as jest.Mock).mockReturnValue({
      backgroundName: '',
      setBackgroundName: jest.fn(),
    });

    // Mock localStorage
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(),
        setItem: jest.fn(),
        removeItem: jest.fn(),
        clear: jest.fn(),
      },
      writable: true,
    });

    // Mock clipboard API
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: jest.fn().mockResolvedValue(undefined),
      },
      writable: true,
    });

    // Mock custom event dispatch
    window.dispatchEvent = jest.fn();
  });

  test('testBackgroundOptionsRendering', () => {
    render(<Content />);
    
    // Check if all backgrounds from the array are rendered
    expect(screen.getAllByText('preview').length).toBe(22); // 22 backgrounds in the array
    expect(screen.getAllByText('copy code').length).toBe(22);
    
    // Check if specific backgrounds are rendered
    expect(screen.getByText('preview').closest('div').parentElement).toBeInTheDocument();
  });

  test('testBackgroundSelection', async () => {
    const setBackgroundNameMock = jest.fn();
    (useBackgroundStore as jest.Mock).mockReturnValue({
      backgroundName: '',
      setBackgroundName: setBackgroundNameMock,
    });

    render(<Content />);
    
    // Click the preview button on the first background
    const previewButtons = screen.getAllByText('preview');
    fireEvent.click(previewButtons[0]);
    
    // Check if the background name was set in the store
    expect(setBackgroundNameMock).toHaveBeenCalledWith('MinimalLight');
    
    // Check if localStorage was updated
    expect(window.localStorage.setItem).toHaveBeenCalledWith('selectedBackground', '<div>Mocked Component</div>');
    expect(window.localStorage.setItem).toHaveBeenCalledWith('selectedBackgroundName', 'MinimalLight');
    
    // Check if custom event was dispatched
    expect(window.dispatchEvent).toHaveBeenCalled();
    
    // Check if toast message appears
    await waitFor(() => {
      expect(screen.getByText('Background applied! Scroll to top to see it.')).toBeInTheDocument();
    });
  });

  test('testBackgroundNameOnHover', async () => {
    render(<Content />);
    
    // Get the first background container
    const backgroundContainers = document.querySelectorAll('.group');
    const firstContainer = backgroundContainers[0];
    
    // Simulate hover
    fireEvent.mouseEnter(firstContainer);
    
    // Check if the display name becomes visible (opacity changes)
    const displayNameElement = firstContainer.querySelector('.opacity-0.transition-opacity');
    expect(displayNameElement).toHaveClass('group-hover:opacity-100');
    
    // Check if the correct display name is shown
    expect(firstContainer.textContent).toContain('Minimal Light');
  });

  test('testMissingBackgroundComponent', () => {
    // Create a modified backgrounds array with one undefined component
    const originalBackgrounds = require('../src/components/Backgrounds');
    const modifiedBackgrounds = [...originalBackgrounds];
    modifiedBackgrounds[0].component = undefined;
    
    // Mock the Backgrounds import to use our modified array
    jest.spyOn(Backgrounds, 'MinimalLight').mockImplementation(() => null);
    
    // Render should not throw an error
    expect(() => render(<Content />)).not.toThrow();
  });

  test('testClipboardFailure', async () => {
    // Mock clipboard API to fail
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: jest.fn().mockRejectedValue(new Error('Clipboard error')),
      },
      writable: true,
    });
    
    render(<Content />);
    
    // Click the copy code button
    const copyButtons = screen.getAllByText('copy code');
    fireEvent.click(copyButtons[0]);
    
    // Check if error toast appears
    await waitFor(() => {
      expect(screen.getByText('Failed to copy code to clipboard')).toBeInTheDocument();
    });
  });

  test('testDarkLightThemeStyling', () => {
    // Test with light background
    (useBackgroundStore as jest.Mock).mockReturnValue({
      backgroundName: 'MinimalLight',
      setBackgroundName: jest.fn(),
    });
    
    const { rerender } = render(<Content />);
    
    // Check for light theme styling
    const containers = document.querySelectorAll('.group');
    expect(containers[0]).toHaveClass('ring-1');
    expect(containers[0]).toHaveClass('ring-slate-900/50');
    
    // Test with dark background
    (useBackgroundStore as jest.Mock).mockReturnValue({
      backgroundName: 'Dark',
      setBackgroundName: jest.fn(),
    });
    
    rerender(<Content />);
    
    // Check for dark theme styling
    const darkContainers = document.querySelectorAll('.group');
    expect(darkContainers[0]).toHaveClass('ring-1');
    expect(darkContainers[0]).toHaveClass('ring-slate-200/50');
    
    // Check if dark backgrounds have correct text styling
    const darkBackground = backgrounds.find(bg => bg.isDark === true);
    if (darkBackground) {
      const darkElements = screen.getAllByText(darkBackground.displayName);
      expect(darkElements[0].closest('p')).toHaveClass('text-gray-200');
      expect(darkElements[0].closest('p')).toHaveClass('bg-black/50');
    }
    
    // Check if light backgrounds have correct text styling
    const lightBackground = backgrounds.find(bg => bg.isDark === false);
    if (lightBackground) {
      const lightElements = screen.getAllByText(lightBackground.displayName);
      expect(lightElements[0].closest('p')).toHaveClass('text-gray-700');
      expect(lightElements[0].closest('p')).toHaveClass('bg-white/50');
    }
  });
});