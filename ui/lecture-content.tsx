"use client";

import { useSearchParams } from "next/navigation";

export const LectureContent = ({
  transcript,
  summary,
}: {
  transcript: React.ReactNode;
  summary: React.ReactNode;
}) => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "transcript";
  const isTranscript = page === "transcript";

  return <div>{isTranscript ? transcript : summary}</div>;
};
