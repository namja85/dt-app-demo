"use client";

import { NavLink } from "@/components/nav-link";
import { useSearchParams } from "next/navigation";

export const LectureNavBar = ({ code }: { code: string }) => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "transcript";
  const isTranscript = page === "transcript";

  return (
    <div className="space-x-2">
      <NavLink active={isTranscript} href={`/lecture/${code}?page=transcript`}>
        TranScript
      </NavLink>
      <NavLink active={!isTranscript} href={`/lecture/${code}/?page=summary`}>
        Summary
      </NavLink>
    </div>
  );
};
