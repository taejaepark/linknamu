import { Profile } from "@/lib/types";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      {/* eslint-disable-next-line @next/next/no-img-element -- SVG 더미 이미지라 next/image 최적화 불필요 */}
      <img
        src={profile.avatarSrc}
        alt={profile.name}
        className="h-24 w-24 rounded-full object-cover"
      />
      <h1 className="text-xl font-bold text-foreground">{profile.name}</h1>
      <p className="text-sm text-foreground/70">{profile.bio}</p>
    </div>
  );
}
