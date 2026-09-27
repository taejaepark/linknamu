import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import DarkModeToggle from "@/components/DarkModeToggle";
import { profile, links } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-background px-4 py-10 sm:py-16">
      <main className="relative flex w-full max-w-sm flex-col items-center gap-6 rounded-3xl border border-foreground/10 p-6 sm:p-8">
        <div className="absolute right-4 top-4">
          <DarkModeToggle />
        </div>
        <ProfileHeader profile={profile} />
        <LinkList links={links} />
      </main>
    </div>
  );
}
