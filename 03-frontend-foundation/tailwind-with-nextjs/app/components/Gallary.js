
import Card from "./Card";

export default function Gallary() {
  const lst = [1, 2, 3, 4, , 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {lst.map((i) => (
          <Card key={i} />
        ))}
      </div>
    </>
  );
}
