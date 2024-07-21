export default function Grid({ children }: { children?: React.ReactNode }) {
  return <div className="grid grid-cols-2 gap-5">{children}</div>;
}
