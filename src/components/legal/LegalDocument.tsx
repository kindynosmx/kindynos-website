export type LegalSection = { title: string; body: string }

export function LegalDocument({
  title,
  updated,
  disclaimer,
  sections,
}: {
  title: string
  updated: string
  disclaimer: string
  sections: LegalSection[]
}) {
  return (
    <main className="mx-auto max-w-3xl min-w-0 px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="font-display text-3xl font-semibold break-words sm:text-4xl">{title}</h1>
      <span className="brand-rule mt-4 block h-0.5 w-12 rounded-full" />
      <p className="text-muted-foreground mt-3 text-sm">{updated}</p>
      <p className="text-muted-foreground mt-7 leading-8">{disclaimer}</p>
      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-display text-xl font-medium">{section.title}</h2>
            <p className="text-muted-foreground mt-4 leading-8">{section.body}</p>
          </section>
        ))}
      </div>
    </main>
  )
}
