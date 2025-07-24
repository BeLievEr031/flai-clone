import { LucideArrowRight } from "lucide-react"

function IntegrationSection() {
    return (
        <section id="integrations" className="py-24 md:py-32">
            <div className="px-4 md:px-6">
                <div className="mx-auto max-w-3xl space-y-12 text-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                            Seamless System Integration
                        </h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                            We integrate with your existing dealership technology stack, including
                            your DMS, CRM, and other essential systems.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <button
                            data-slot="button"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 has-[>svg]:px-4 rounded-full px-8"
                        >
                            Book Demo to See How We Integrate
                            <LucideArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default IntegrationSection