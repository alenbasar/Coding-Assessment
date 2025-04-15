import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '../../context/ThemeContext.tsx';

const AllTheProviders: React.FC<any> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
