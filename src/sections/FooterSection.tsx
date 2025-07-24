
function FooterSection() {
    return (
        <footer className="border-t border-border bg-background">
            <div className="px-4 md:px-6 py-8">
                <div className="mx-auto max-w-4xl">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-bold">Flai</span>
                        </div>
                        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
                            <nav className="flex items-center gap-4 text-sm">
                                <a
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                    href="/about"
                                >
                                    About
                                </a>
                                <a
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                    href="/privacy"
                                >
                                    Privacy Policy
                                </a>
                                <span className="text-muted-foreground">Terms of Service</span>
                                <a
                                    href="mailto:ari@useflai.com"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Contact
                                </a>
                            </nav>
                            <div className="flex items-center gap-4">
                                <div className="text-sm text-muted-foreground">
                                    © 2025 Flai Technologies Inc. All rights reserved.
                                </div>
                                <a
                                    href="https://www.linkedin.com/company/useflai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default FooterSection