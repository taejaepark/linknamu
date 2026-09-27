"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="다크모드 전환"
      className="rounded-full border border-foreground/15 p-2 text-foreground transition-colors hover:bg-foreground/10"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
