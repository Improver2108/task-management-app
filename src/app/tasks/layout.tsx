import SharedLayout from "./sharedLayout";

export default function TaskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SharedLayout>{children}</SharedLayout>
    </>
  );
}
