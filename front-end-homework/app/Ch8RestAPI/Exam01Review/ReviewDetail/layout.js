import { Suspense } from "react";

export default function ReviewUpdateLayout({ children }) {
    return (
        <Suspense fallback={<p className="p-4 text-sm">수정 화면을 준비하고 있습니다…</p>}>
            {children}
        </Suspense>
    );
}
