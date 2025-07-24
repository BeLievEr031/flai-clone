import { LucideArrowRight } from "lucide-react"
import WorkFlowImgSrc from "../assets/workflow.png"
function CustomeWorkflowSection() {
    return (
        <section id="workflows" className="py-24 md:py-32">
            <div className="px-4 md:px-6">
                <div className="mx-auto max-w-6xl space-y-12">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                            Build Custom Workflows
                        </h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                            Create automated sequences that follow up with customers at the
                            perfect time with the right message.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold">Smart Follow-up Sequences</h3>
                            <p className="text-muted-foreground text-lg">
                                Design multi-step campaigns that automatically handle everything
                                from recall notifications to service reminders.
                            </p>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <LucideArrowRight />
                                    Automated phone calls, SMS, and email sequences
                                </li>
                                <li className="flex items-start gap-3">
                                    <LucideArrowRight />
                                    Smart timing based on customer responses
                                </li>
                                <li className="flex items-start gap-3">
                                    <LucideArrowRight />
                                    Integration with your existing CRM and DMS
                                </li>
                            </ul>
                            <div className="pt-4">
                                <button
                                    data-slot="button"
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 has-[>svg]:px-4 rounded-full px-8"
                                >
                                    See Workflows in Action
                                    <LucideArrowRight />
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative bg-background border border-border rounded-lg p-4 shadow-lg">
                                <img
                                    src={WorkFlowImgSrc}
                                    alt="Workflow automation interface showing a recall campaign with multiple steps including phone calls, wait times, SMS, and email follow-ups"
                                    className="w-full h-auto rounded-md transition-transform duration-300 hover:scale-105 cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default CustomeWorkflowSection