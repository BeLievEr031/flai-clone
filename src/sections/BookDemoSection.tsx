import { LucideArrowRight } from 'lucide-react'

function BookDemoSection() {
    return (
        <section className="py-24">
            <div className="px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                            Ready to bring more customers to your dealership?
                        </h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                            Join the growing number of dealerships increasing sales with Flai.
                        </p>
                    </div>
                    <div>
                        <button
                            data-slot="button"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 has-[>svg]:px-4 rounded-full px-8 mt-4"
                        >
                            Book Demo
                            <LucideArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default BookDemoSection