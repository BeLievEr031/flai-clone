import { LucideMenu, LucideX } from 'lucide-react'
import clsx from 'clsx';
import { Link } from 'react-router-dom'
import { useState } from 'react';

function NavBar() {
    const [open, setOpen] = useState(false)
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/10">
            <div className="container mx-auto px-3 sm:px-4 md:px-6">
                <div className="flex h-16 items-center justify-between md:grid md:grid-cols-3 md:gap-4">
                    <div className="flex items-center">
                        <a
                            className="text-xl font-bold hover:text-muted-foreground transition-colors"
                            href="/"
                        >
                            Flai
                        </a>
                    </div>
                    <div className="hidden md:flex items-center justify-center space-x-6">
                        <a
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            href="/#what-we-do"
                        >
                            What We Do
                        </a>
                        <a
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            href="/#our-approach"
                        >
                            How It Works
                        </a>
                        <a
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            href="/#integrations"
                        >
                            Integrations
                        </a>
                        <Link
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            to={"/about"}
                        >
                            Team
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center justify-end space-x-4">
                        <a
                            data-slot="button"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3"
                            href="/book-demo"
                        >
                            Book Demo
                        </a>
                        <Link
                            data-slot="button"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-9 px-4 py-2 has-[>svg]:px-3"
                            to="/login"
                        >
                            Login
                        </Link>
                    </div>
                    <button
                        data-slot="button"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9 md:hidden cursor-pointer"
                        type="button"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="radix-«R24tdb»"
                        data-state="closed"
                        onClick={() => {
                            console.log(45);
                            setOpen(true)
                        }}
                    >
                        <LucideMenu />
                    </button>

                    <div
                        className={clsx(
                            "bg-background fixed z-50 flex flex-col gap-4 shadow-lg transition-transform ease-in-out duration-300 inset-y-0 right-0 h-screen border-l sm:max-w-sm w-[280px] sm:w-[320px] transform md:hidden",
                            {
                                "translate-x-full": !open,
                                "translate-x-0": open
                            }
                        )}

                    >
                        <div className="flex flex-col space-y-6 mt-6 px-2">
                            <a
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                                href="/#what-we-do"
                            >
                                What We Do
                            </a>
                            <a
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                                href="/#our-approach"
                            >
                                How It Works
                            </a>
                            <a
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                                href="/#integrations"
                            >
                                Integrations
                            </a>
                            <a
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                                href="/about"
                            >
                                Team
                            </a>
                            <div className="border-t pt-6 space-y-3">
                                <a
                                    data-slot="button"
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 w-full"
                                    href="/book-demo"
                                >
                                    Book Demo
                                </a>
                                <a
                                    data-slot="button"
                                    className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-9 px-4 py-2 has-[>svg]:px-3 w-full justify-start"
                                    href="/login"
                                >
                                    Login
                                </a>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none"

                            onClick={() => setOpen(false)}
                        >
                            <LucideX />
                        </button>
                    </div>


                </div>
            </div>
        </nav >

    )
}

export default NavBar