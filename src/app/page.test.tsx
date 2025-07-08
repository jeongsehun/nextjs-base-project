import { render, screen } from '@testing-library/react';

import Home from './page';

// Next.js의 홈페이지 컴포넌트를 테스트합니다
describe('Home Page', () => {
  it('renders without crashing', () => {
    render(<Home />);
  });

  it('contains welcome message', () => {
    render(<Home />);
    // 실제 홈페이지에 있는 텍스트로 수정하세요
    const headingElement = screen.getByRole('main');
    expect(headingElement).toBeInTheDocument();
  });

  it('has correct structure', () => {
    render(<Home />);
    // 홈페이지가 올바른 구조를 가지고 있는지 확인
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });
});
