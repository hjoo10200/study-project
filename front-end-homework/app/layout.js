import "./globals.css";

export const metadata = {
  title: { default: "ch2 실습실 | 컴포넌트 기초", template: "%s | ch2 실습실" },
  description: "JSX, 컴포넌트, 표현식, 조건부 렌더링, 스타일과 이벤트를 직접 작성하는 실습 공간입니다.",
};

export default function RootLayout({ children }) {
  return <html lang="ko"><body className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased">{children}</body></html>;
}
