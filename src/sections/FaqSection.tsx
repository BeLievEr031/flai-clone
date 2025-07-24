import FaqQuestion from "../components/FaqQuestion"

const faqs = [
    {
        question: "How does the Voice AI work for dealerships?",
        answer: "Our Voice AI acts like your best sales rep, handling incoming calls 24/7. It can schedule appointments, book test drives, answer common questions about inventory, and qualify leads. All conversations are recorded and the AI learns your dealership's specific processes and inventory."
    },
    {
        question: "Will customers know they're talking to AI?",
        answer: "Our AI is transparent about being AI-powered from the start of each call. Customers appreciate getting immediate assistance 24/7, and our AI is designed to seamlessly transfer to human staff when needed for complex inquiries or closing deals."
    },
    {
        question: "Can the AI handle multiple calls at once?",
        answer: "Yes, our AI can handle unlimited simultaneous calls, ensuring no customer ever gets a busy signal. Each conversation is personalized and handled with the same level of attention, whether it's the first call of the day or the hundredth."
    },
    {
        question: "What kind of ROI can I expect?",
        answer: "Our clients typically see 340% ROI in the first year through increased lead conversion, reduced missed opportunities, and improved operational efficiency. The AI pays for itself by converting just a few additional leads per month."
    },
    {
        question: "Is this secure and compliant?",
        answer: "Yes, we use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and strict access controls. We're fully compliant with automotive industry regulations and never share customer data with third parties."
    },
]

function FaqSection() {

    return (
        <section id="faq" className="bg-muted/40 py-24 md:py-32">
            <div className="px-4 md:px-6">
                <div className="mx-auto max-w-3xl space-y-12">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                            Frequently Asked Questions
                        </h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                            Everything you need to know about our dealership AI solution.
                        </p>
                    </div>
                    <div className="space-y-4">

                        {
                            faqs.map(({ question, answer }) => {
                                return <FaqQuestion question={question}
                                    answer={answer}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqSection