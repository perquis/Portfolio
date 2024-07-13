import Link from "next/link";

import { emptyPlaceholderImage } from "@/data";
import { Avatar } from "@/shared/ui";

export const Logo = () => {
  return (
    <Link href="/" className="flex flex-row gap-5 w-fit items-center">
      <Avatar rounded="full" size="tiny" src={emptyPlaceholderImage} alt="Damian Werens" />
      <b className="dark:text-white text-sm">Damian Werens</b>
    </Link>
  );
};
