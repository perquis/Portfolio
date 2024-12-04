import { usePathname, useRouter } from "@/libs/next-intl";

const useChangeLocale = () => {
  const pathname = usePathname();
  const { push } = useRouter();

  const changeLanguage = (locale: string) => push(pathname, { locale });

  return { changeLanguage };
};

export default useChangeLocale;
