import "./globals.css";
import AppHeader from "./AppHeader";
import AppMenu from "./AppMenu";

export const metadata = {
  title: { default: "프론트엔드 복습 | 컴포넌트·props·state", template: "%s | 프론트엔드 복습" },
  description: "컴포넌트, 반복, DOM 참조, props와 상태의 주요 코드를 직접 작성하는 실습 공간입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-slate-50 font-sans text-slate-900">
        <AppHeader />
        <div className="flex flex-1">
          <AppMenu />
          <main className="min-w-0 flex-1 p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
