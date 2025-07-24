import { Link } from 'react-router-dom'

function NavBar() {
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
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9 md:hidden"
                        type="button"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="radix-«R24tdb»"
                        data-state="closed"
                    >
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
                            className="lucide lucide-menu h-5 w-5"
                            aria-hidden="true"
                        >
                            <path d="M4 12h16" />
                            <path d="M4 18h16" />
                            <path d="M4 6h16" />
                        </svg>
                        <span className="sr-only">Toggle menu</span>
                    </button>
                </div>
            </div>
        </nav >

    )
}

export default NavBar