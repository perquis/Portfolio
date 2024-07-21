export default function Page({ children }: { children?: React.ReactNode }) {
  return <main className="flex flex-col gap-10">{children}</main>;
}
