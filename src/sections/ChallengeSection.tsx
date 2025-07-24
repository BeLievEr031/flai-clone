
function ChallengeSection() {
    return (
        <section className="py-24 md:py-32">
            <div className="px-4 md:px-6">
                <div className="mx-auto max-w-3xl space-y-12 text-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                            The Challenge
                        </h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                            Dealerships are losing customers due to missed calls and after-hours
                            inquiries.
                        </p>
                    </div>
                    <div className="grid gap-12 sm:grid-cols-2">
                        <div className="space-y-3">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
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
                                    className="lucide lucide-clock h-8 w-8 text-muted-foreground"
                                    aria-hidden="true"
                                >
                                    <circle cx={12} cy={12} r={10} />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <div className="text-4xl font-bold">56%</div>
                            <h3 className="text-lg font-medium">
                                of dealership leads arrive after business hours
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Missing these leads means losing potential sales to competitors who
                                are available 24/7.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
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
                                    className="lucide lucide-phone h-8 w-8 text-muted-foreground"
                                    aria-hidden="true"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>
                            <div className="text-4xl font-bold">74%</div>
                            <h3 className="text-lg font-medium">
                                of customers hang up if their call isn't answered within 3 rings
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Every missed call is a potential sale lost to a competitor who
                                answers immediately.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ChallengeSection