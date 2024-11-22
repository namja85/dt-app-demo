export default async function LectureRoomPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;

  return (
    <div>
      <h1>Lecture Room: {code}</h1>
    </div>
  );
}
