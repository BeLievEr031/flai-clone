import { LucideArrowRight } from "lucide-react"

interface IProp {
    title?: string;
}

function TeamSection({ title = "" }: IProp) {


    return (
        <section id="team" className="bg-muted/40 py-24 md:py-32">
            <div className="px-4 md:px-6">
                <div className="mx-auto max-w-4xl space-y-12">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                            {title ? title : "Meet the Team"}
                        </h2>
                        {!title && <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                            Backed by Y Combinator and built by former engineers from Uber,Netflix, and top AI startups.
                        </p>}
                    </div>
                    <div className="grid gap-8 sm:grid-cols-3">
                        <div className="space-y-4 text-center">
                            <div className="mx-auto w-32 h-32 rounded-full bg-muted overflow-hidden border-4 border-primary/10 transition-transform duration-300 hover:scale-110 cursor-pointer">
                                <img
                                    src="https://www.useflai.com/ari.jpg"
                                    alt="Ari Polakof"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center justify-center gap-2">
                                    <h3 className="text-lg font-medium">Ari Polakof</h3>
                                    <a
                                        href="https://www.linkedin.com/in/ari-polakof-78b976150/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-primary/80 transition-colors"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                </div>
                                <p className="text-sm text-primary font-medium">
                                    Co-Founder &amp; CEO
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Second engineer at HappyRobot (YC S23)
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4 text-center">
                            <div className="mx-auto w-32 h-32 rounded-full bg-muted overflow-hidden border-4 border-primary/10 transition-transform duration-300 hover:scale-110 cursor-pointer">
                                <img
                                    src="https://www.useflai.com/alen.jpg"
                                    alt="Alen Polakof"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center justify-center gap-2">
                                    <h3 className="text-lg font-medium">Alen Polakof</h3>
                                    <a
                                        href="https://www.linkedin.com/in/alenpolakof/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-primary/80 transition-colors"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                </div>
                                <p className="text-sm text-primary font-medium">
                                    Co-Founder &amp; CTO
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Former infrastructure engineer at Uber
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4 text-center">
                            <div className="mx-auto w-32 h-32 rounded-full bg-muted overflow-hidden border-4 border-primary/10 transition-transform duration-300 hover:scale-110 cursor-pointer">
                                <img
                                    src="https://www.useflai.com/juan.jpg"
                                    alt="Juan Alzugaray"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center justify-center gap-2">
                                    <h3 className="text-lg font-medium">Juan Alzugaray</h3>
                                    <a
                                        href="https://www.linkedin.com/in/jfalzugaray/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-primary/80 transition-colors"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                </div>
                                <p className="text-sm text-primary font-medium">
                                    Co-Founder &amp; COO
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Former Netflix data scientist
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <a
                            className="inline-flex items-center justify-center rounded-full border border-primary bg-background px-8 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                            href="/about"
                        >
                            See More
                            <LucideArrowRight />
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default TeamSection