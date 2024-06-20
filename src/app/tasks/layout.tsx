import CommonTask from "./commonTask";

export default function TaskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CommonTask>{children}</CommonTask>
    </>
  );
}
