"use client";

import { Brain } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import LogoutMenuItem from "./ui/logout-menu-item";

export default function HomeNavbar() {
  const [user, setUser] = useState(null);
  const supabase = createClient();

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  return (
    <header className="container mx-auto px-4 lg:px-6 h-16 flex items-center border-b border-gray-100">
      <Link href="/" className="flex items-center justify-center">
        <div className="w-8 h-8 rounded-lg bg-[#0e716d] flex items-center justify-center mr-2">
          <Brain className="h-5 w-5 text-white" />
        </div>
        <span className="font-bold text-xl text-gray-900">InfoDigest Pro</span>
      </Link>
      <nav className="ml-auto flex items-center gap-6">
        <Link
          href="/"
          className="text-sm font-medium text-gray-600 hover:text-[#0e716d] transition-colors"
        >
          Home
        </Link>
        <Link
          href="#features"
          className="text-sm font-medium text-gray-600 hover:text-[#0e716d] transition-colors"
        >
          Features
        </Link>
        <Link
          href="#testimonials"
          className="text-sm font-medium text-gray-600 hover:text-[#0e716d] transition-colors"
        >
          Reviews
        </Link>
        <Link
          href="#pricing"
          className="text-sm font-medium text-gray-600 hover:text-[#0e716d] transition-colors"
        >
          Pricing
        </Link>
        {user ? (
          <div className="flex items-center gap-2 cursor-pointer">
            <Link href="/dashboard">
              <Button className="" size="sm">
                Dashboard
              </Button>
            </Link>
            <DropdownMenu className="px-6">
              <DropdownMenuTrigger className="cursor-pointer">
                <Avatar>
                  <AvatarImage src={user.user_metadata.avatar_url} />
                  <AvatarFallback className="bg-primary text-white">
                    {user.email?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <LogoutMenuItem />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <Link href="/login">
            <Button
              variant="outline"
              size="sm"
              className="border-[#0e716d] text-[#0e716d] hover:bg-[#0e716d] hover:text-white"
            >
              Sign In
            </Button>
          </Link>
        )}
      </nav>
    </header>
  );
}
