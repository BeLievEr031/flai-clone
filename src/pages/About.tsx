import { LucideArrowRight } from "lucide-react"
import NavBar from "../components/NavBar"
import FooterSection from "../sections/FooterSection"
import TeamSection from "../sections/TeamSection"

function About() {
    return (
        <div>
            <NavBar />
            <TeamSection title="Meet the Founders" />

            <section className="py-16 md:py-24">
                <div className="px-4 md:px-6">
                    <div className="mx-auto max-w-3xl space-y-8">
                        <div className="space-y-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                Our Story
                            </h2>
                        </div>
                        <div className="space-y-6 text-muted-foreground md:text-lg/relaxed">
                            <p>
                                Flai was born from an observation: dealerships are losing revenue to
                                missed calls and after-hours inquiries. While the rest of the world
                                moved to 24/7 digital experiences, car dealers are still limited by
                                business hours. Notifying customers of recalls takes days, and
                                scheduling service appointments is a nightmare for customers. It
                                should not be like this.
                            </p>
                            <p>
                                Our founders used their expertise in AI to create a solution that
                                doesn't replace your sales team, it empowers it. We built AI that
                                feels natural, helpful, and genuinely caring, working around the clock
                                to capture and nurture every lead.
                            </p>
                            <p>
                                Today, we're backed by Y Combinator and trusted by dealerships
                                nationwide.
                            </p>
                            <p>Our goal remains simple: bring more customers to your dealership.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-muted/40 py-16 md:py-24">
                <div className="px-4 md:px-6">
                    <div className="mx-auto max-w-3xl space-y-8">
                        <div className="space-y-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                How We Work
                            </h2>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                                <h3 className="text-lg font-medium">Customer First</h3>
                                <p className="text-sm text-muted-foreground">
                                    Every decision centers around delivering value to dealerships and
                                    their customers.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-medium">Transparency</h3>
                                <p className="text-sm text-muted-foreground">
                                    Honest communication and clear expectations in all interactions.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-medium">Innovation</h3>
                                <p className="text-sm text-muted-foreground">
                                    Pushing AI boundaries to solve real automotive industry problems.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-medium">Results</h3>
                                <p className="text-sm text-muted-foreground">
                                    Measurable outcomes that directly impact partners' success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="px-4 md:px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                Ready to bring more customers to your dealership?
                            </h2>
                            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg/relaxed">
                                Join dealerships nationwide who are capturing more leads with Flai.
                            </p>
                        </div>
                        <div className="mt-8">
                            <button
                                data-slot="button"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 has-[>svg]:px-4 rounded-full px-8"
                            >
                                Book Demo
                                <LucideArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    )
}

export default About