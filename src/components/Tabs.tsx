import { LucideArrowRight } from "lucide-react";
import React, { useState } from "react";

type Tab = {
    label: string;
    content: {
        title: string;
        description: string;
        icon: React.ReactNode;
        actionParagrph: string;
        actionBtnText: string;
        steps: string[];
    };
};

type TabsProps = {
    tabs: Tab[];
    initialIndex?: number;
};

const Tabs: React.FC<TabsProps> = ({ tabs, initialIndex = 0 }) => {
    const [activeIndex, setActiveIndex] = useState(initialIndex);
    console.log(tabs);


    return (
        <div className="w-full">
            <div className="grid grid-cols-3 bg-gray-100 p-1 rounded-sm w-full">
                {tabs.map((tab, index) => {
                    const isActive = activeIndex === index;
                    return (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`cursor-pointer px-6 py-1 text-sm font-medium rounded-sm transition 
                ${isActive ? "bg-white shadow text-black" : "text-gray-600"}
              `}
                        >
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            <div className="mt-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                {tabs[activeIndex].content.icon}
                            </div>
                            <h3 className="text-2xl font-bold">{tabs[activeIndex].content.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-lg">
                            {tabs[activeIndex].content.description}
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                            {
                                tabs[activeIndex].content.steps.map((item, index) => {
                                    return <li className="flex items-start gap-2" key={index}>
                                        <LucideArrowRight />
                                        {item}
                                    </li>
                                })

                            }
                        </ul>
                    </div>
                    <div className="flex flex-col items-center space-y-4">
                        <div className="text-center">
                            <p className="text-sm text-muted-foreground mb-4">
                                {tabs[activeIndex].content.actionParagrph}
                            </p>
                        </div>
                        <button
                            data-slot="button"
                            className="whitespace-nowrap text-sm disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-10 has-[>svg]:px-4 gap-2 transition-all duration-300 ease-in-out font-medium flex items-center justify-center shadow-sm hover:shadow-md rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 border-primary"
                        >
                            {tabs[activeIndex].content.icon}
                            {tabs[activeIndex].content.actionBtnText}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Tabs;
