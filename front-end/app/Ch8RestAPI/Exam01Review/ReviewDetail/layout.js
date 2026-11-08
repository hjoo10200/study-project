import { Suspense } from "react";

export default function ReviewDetailLayout({ children }) {
    return (
        <Suspense fallback={<p className="p-6 text-sm text-zinc-400">후기를 불러오는 중입니다.</p>}>
            {children}
        </Suspense>
    );
}
