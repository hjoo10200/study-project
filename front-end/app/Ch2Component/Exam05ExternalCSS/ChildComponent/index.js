import styles from "./childComponent.module.css";

export default function ChildComponent() {
    return (
        <section className="mb-4 overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
            <header className="border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                <h2 className="font-semibold">ChildComponent</h2>
            </header>
            <div className="p-4">
              <div className={styles.example}>ChildComponent</div>
            </div>
        </section>
    );
}
