
function HeroSection() {
    return (
        <section className="py-24 md:py-36 lg:py-48 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden hidden md:block">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute left-[16.67%] top-0 w-px h-full bg-primary" />
                    <div className="absolute left-[33%] top-0 w-px h-full bg-primary" />
                    <div className="absolute left-[50%] top-0 w-px h-full bg-primary" />
                    <div className="absolute left-[66%] top-0 w-px h-full bg-primary" />
                    <div className="absolute left-[83.33%] top-0 w-px h-full bg-primary" />
                    <div className="absolute left-0 top-[20%] w-full h-px bg-primary" />
                    <div className="absolute left-0 top-[33%] w-full h-px bg-primary" />
                    <div className="absolute left-0 top-[50%] w-full h-px bg-primary" />
                    <div className="absolute left-0 top-[66%] w-full h-px bg-primary" />
                    <div className="absolute left-0 top-[80%] w-full h-px bg-primary" />
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center text-center space-y-10">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                            We Bring Customers to Your Dealership
                        </h1>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                            Turn every call into a sale with AI that never misses a lead.
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex items-center space-x-3 px-4 py-2 bg-muted/50 border border-border rounded-full hover:bg-muted/70 transition-all duration-300">
                            <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/1200px-Y_Combinator_logo.svg.png"
                                    alt="Y Combinator"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-sm text-muted-foreground font-medium">
                                Backed by Y Combinator
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-center gap-4">
                        <button
                            data-slot="button"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 has-[>svg]:px-4 rounded-full px-8"
                        >
                            Book Demo
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-arrow-right ml-2 h-4 w-4"
                                aria-hidden="true"
                            >
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HeroSection