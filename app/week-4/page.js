import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="flex justify-center w-full">
      <ul className="m-4 p-2">
        <NewItem name="Sample Item" category="electronics" />
      </ul>
    </main>
  );
}
