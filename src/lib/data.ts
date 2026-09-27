import { LinkItem, Profile } from "./types";

// TODO: 더미 값. 실제 프로필 사진/이름/소개로 교체 예정.
export const profile: Profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  avatarSrc: "/avatar-placeholder.svg",
};

export const links: LinkItem[] = [
  { id: "instagram", label: "Instagram", url: "https://instagram.com" },
  { id: "youtube", label: "YouTube", url: "https://youtube.com" },
  { id: "blog", label: "Blog", url: "https://example.com/blog" },
  { id: "github", label: "GitHub", url: "https://github.com" },
];
