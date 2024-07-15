import CalenderFull from "./calenderFull";

export default async function UpcomingPage() {
  return (
    <div className="absolute left-[50%] h-[89vh] w-full -translate-x-1/2 overflow-hidden px-12">
      <h1 className="text-4xl font-bold">Upcoming</h1>
      <CalenderFull />
    </div>
  );
}
