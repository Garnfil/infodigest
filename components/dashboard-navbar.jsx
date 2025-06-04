"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Document History", href: "/history" },
];

export default function DashboardNavbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur ">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">InfoDigest</span>
                        <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-primary"></div>
                            <span className="ml-2 text-lg font-semibold">InfoDigest</span>
                        </div>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <Button
                        variant="ghost"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </Button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === item.href ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Button asChild className="ml-4">
                        <Link href="/login">Log in</Link>
                    </Button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className={cn("lg:hidden ", mobileMenuOpen ? "fixed inset-0 z-50" : "hidden")}>
                <div className="fixed h-screen inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">InfoDigest</span>
                            <div className="flex items-center">
                                <div className="h-8 w-8 rounded-full bg-primary"></div>
                                <span className="ml-2 text-lg font-semibold">InfoDigest</span>
                            </div>
                        </Link>
                        <Button
                            variant="ghost"
                            className="-m-2.5 rounded-md p-2.5"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                        </Button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={cn(
                                            "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-accent",
                                            pathname === item.href
                                                ? "text-primary"
                                                : "text-muted-foreground"
                                        )}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <div className="flex items-center justify-between">
                                    <Button asChild>
                                        <Link
                                            href="/login"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            Log in
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
