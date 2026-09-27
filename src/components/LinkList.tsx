import { LinkItem } from "@/lib/types";
import LinkCard from "./LinkCard";

export default function LinkList({ links }: { links: LinkItem[] }) {
  return (
    <div className="flex w-full flex-col gap-3">
      {links.map((link) => (
        <LinkCard key={link.id} link={link} />
      ))}
    </div>
  );
}
