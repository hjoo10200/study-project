import ChildComponent from "./ChildComponent";
import styles from "./page.module.css"


export default function Exam05ExternalCSS() {
    // TODO: 필요한 변수, 함수 또는 스타일 객체를 직접 작성하세요.

    return (
        <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
            <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
                <h2 className="font-semibold">Exam05ExternalCSS</h2>
            </header>
            <div className="space-y-2 p-4">
                <div className={styles.example}>외부 css를 적용함</div>
                <ChildComponent/>
                {/* TODO: CSS 모듈과 자식 컴포넌트 폴더 및 파일을 직접 만들고 적용하세요. */}
            </div>
        </section>
    );
}