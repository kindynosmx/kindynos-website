export function SectionEyebrow({ children }: { children: string }) {
  return (
    <div>
      <p className="text-primary text-sm font-medium tracking-[0.28em] uppercase">{children}</p>
      <span className="brand-rule mt-3 block h-0.5 w-12 rounded-full" />
    </div>
  )
}
