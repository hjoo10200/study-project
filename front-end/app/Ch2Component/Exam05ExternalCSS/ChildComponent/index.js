import styles from "./childComponent.module.css";

export default function ChildComponent() {
    return (
        <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
            <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
                <h2 className="font-semibold">ChildComponent</h2>
            </header>
            <div className="p-4">
              <div className={styles.example}>ChildComponent</div>
            </div>
        </section>
    );
}
