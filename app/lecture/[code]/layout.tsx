import { NavLink } from "@/components/nav-link";
import { LectureContent } from "@/ui/lecture-content";
import { LectureNavBar } from "@/ui/lecture-nav-bar";

export default async function LectureRoomLayout({
  params,
  transcript,
  summary,
  children,
}: {
  params: Promise<{ code: string }>;
  transcript: React.ReactNode;
  summary: React.ReactNode;
  children: React.ReactNode;
}) {
  const { code } = await params;

  return (
    <div>
      <LectureNavBar code={code} />
      {children}
      <LectureContent transcript={transcript} summary={summary} />
      <NavLink href="/lecture">Quit</NavLink>
    </div>
  );
}
