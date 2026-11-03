export default function ChildComponent({
  name,
  version=18,
  data,
  children})
 {
  // TODO: props를 받아 필요한 값과 기본값을 직접 작성하세요.

  return (
    <section className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm">
      <header className="border-b border-gray-200 bg-gray-100 px-4 py-3">
        <h3 className="font-semibold">ChildComponent</h3>
      </header>
      <div className="space-y-2 p-4">
        {/* TODO: 전달받은 props와 children을 직접 출력하세요. */}
        <p>name:{name}</p>
        <p>version:{version}</p>
        <p>children:{children}</p>
        <p>data: {data}</p>
      </div>
    </section>
  );
}
