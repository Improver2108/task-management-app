function* nextDateGenerator(date: Date): Generator<Date, Date, unknown> {
  while (true) {
    yield date;
    date.setDate(date.getDate() + 1);
  }
}

export function getWeeksAfterCurrentDate(date: Date) {
  const weekDate: string[] = [];
  const weekIterator = nextDateGenerator(date);
  let currentDate = weekIterator.next().value;
  while (currentDate.getDay() !== 0) {
    weekDate.push(
      currentDate.toLocaleDateString("en-US", {
        day: "numeric",
        weekday: "long",
      }),
    );
    currentDate = weekIterator.next().value;
  }
  weekDate.push(
    currentDate.toLocaleDateString("en-US", {
      day: "numeric",
      weekday: "long",
    }),
  );
  return weekDate;
}
