"use client";

import { LinkItem } from "@/lib/types";

export default function LinkCard({ link }: { link: LinkItem }) {
  const handleClick = () => {
    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ linkId: link.id }),
      keepalive: true,
    }).catch(() => {
      // 클릭 집계 실패는 사용자 이동을 막지 않습니다.
    });
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="block w-full rounded-xl border border-foreground/15 bg-foreground/5 px-4 py-3 text-center font-medium text-foreground transition-colors hover:bg-foreground/10"
    >
      {link.label}
    </a>
  );
}
