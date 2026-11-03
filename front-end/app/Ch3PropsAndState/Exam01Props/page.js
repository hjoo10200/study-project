import ChildComponent from "./ChildComponent";
import Image from "next/image";




export default function Ch2Component() {
    return (
        <div className="p-4">
            <section className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-sm">
                <header className="border-b border-zinc-700 bg-zinc-800 px-4 py-3">
                    <h2 className="font-semibold">Exam01Props</h2>
                </header>
                <div className="p-4">
                    <ChildComponent name="react" version={19} data={12}>
                        <Image
                            src={'/images/photo12.jpg'}
                            alt="사진 12"
                            width={705}
                            height={444}
                            className="h-auto max-w-full rounded"
                            style={{width: "200px", height: "auto"}}
                        />
                    </ChildComponent>

                    <ChildComponent data={12}>
                        <Image
                            src={'/images/photo12.jpg'}
                            alt="사진 12"
                            width={705}
                            height={444}
                            className="h-auto max-w-full rounded"
                            style={{width: "200px", height: "auto"}}
                        />
                    </ChildComponent>
                </div>
            </section>
        </div>
    );
}
