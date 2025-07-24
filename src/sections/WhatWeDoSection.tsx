import { LucideCircleAlert, LucidePhone, LucideWrench } from "lucide-react";
import Tabs from "../components/Tabs";

const tabItems = [
    {
        label: "Receptionist",
        content: {
            title: "Front Desk Assistant",
            description: "Our AI receptionist handles incoming calls, schedules appointments, and answers common questions about your inventory and services. Never miss a lead again with 24/7 availability.",
            icon: <LucidePhone />,
            actionParagrph: "Try calling our demo receptionist AI to see how it handles customer inquiries",
            actionBtnText: "Test Receptionist AI",
            steps: ['Schedule test drives and service appointments', 'Answer questions about vehicle availability and pricing', 'Collect lead information and route to sales team', 'Provide dealership hours and location information']
        }
    },
    {
        label: "Recalls",
        content: {
            title: "Recall Management",
            description: "Efficiently manage vehicle recalls by automatically contacting affected customers and scheduling service appointments. Ensure compliance while maintaining customer satisfaction.",
            icon: <LucideCircleAlert />,
            actionParagrph: "Experience how our AI handles recall notifications and appointment scheduling",
            actionBtnText: "Test Recall AI",
            steps: ['Automatically identify affected vehicles from your database', 'Call customers to inform them about recalls', 'Schedule recall service appointments', 'Track recall completion and compliance']
        }
    },
    {
        label: "Service",
        content: {
            title: "Service Scheduling",
            description: "Streamline your service department with AI that handles appointment scheduling, service inquiries, and customer follow-ups. Maximize shop efficiency and customer satisfaction.",
            icon: <LucideWrench />,
            actionParagrph: "Try our service scheduling AI to see how it handles customer service needs",
            actionBtnText: "Test Service Ai",
            steps: ['Schedule maintenance and repair appointments', 'Provide service cost estimates and timeframes', 'Send service reminders and follow-ups', 'Handle warranty and service history inquiries']
        }
    },
];
function WhatWeDoSection() {
    return (
        <section id="what-we-do" className="bg-muted/40 py-24 md:py-32 w-full">
            <div className="px-4 md:px-6">
                <div className="mx-auto max-w-4xl space-y-12">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                            See Flai in Action
                        </h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                            Experience how our AI handles different dealership scenarios.
                        </p>
                    </div>
                    <Tabs tabs={tabItems} />
                </div>
            </div>
        </section>


    )
}

export default WhatWeDoSection