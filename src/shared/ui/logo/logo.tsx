import Link from "next/link";

import { emptyPlaceholderImage } from "@/data";
import { Avatar } from "@/shared/ui";

export const Logo = () => {
  return (
    <Link href="/" className="flex flex-row gap-5 w-fit">
      <Avatar rounded="full" size="tiny" src={emptyPlaceholderImage} alt="Damian Werens" />
      <b>Damian Werens</b>
    </Link>
  );
};
