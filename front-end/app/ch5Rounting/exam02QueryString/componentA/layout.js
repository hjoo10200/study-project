import { Suspense } from "react";

export default function ComponentALayout({ children }) {
    return (
        <Suspense fallback={<p className="p-4">로딩 중...</p>}>
            {children}
        </Suspense>
    );
}
