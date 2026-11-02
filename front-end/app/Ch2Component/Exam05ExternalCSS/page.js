import ChildComponent from "./ChildComponent";
import styles from "./page.module.css";

export default function Exam05ExternalCSS() {
    return (
        <section className="overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
            <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
                <h2 className="font-semibold">Exam05ExternalCSS</h2>
            </header>
            <div className="space-y-2 p-4">
                <div className={styles.example}>외부 CSS 적용</div>
                <ChildComponent/>
            </div>
        </section>
    );
}
