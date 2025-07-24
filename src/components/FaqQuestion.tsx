import { LucideChevronDown } from 'lucide-react'
import { useState } from 'react'


interface IProp {
    question: string;
    answer: string;
}

function FaqQuestion({ question, answer }: IProp) {
    const [open, setOpen] = useState(false)

    return (
        <div className="border rounded-lg bg-background transition-all">
            <button type="button" className="flex w-full items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                <h3 className="text-lg font-medium">
                    {question}
                </h3>
                <LucideChevronDown />

            </button>
            {open && <p className="px-4 pb-2 text-muted-foreground">
                {answer}
            </p>}

        </div>
    )
}

export default FaqQuestion