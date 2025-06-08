"use client"; // Ensure this is a Client Component

import { useRouter } from "next/navigation";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"; // Adjust based on your component library
import { Button } from "@/components/ui/button"; // Adjust based on your component library

export default function LogoutMenuItem() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch("/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Redirect to a specific page after logout, e.g., login page
        router.push("/login");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <DropdownMenuItem className="cursor-pointer" onSelect={handleLogout}>
      <span>Logout</span>
      {/* Form can be omitted if using fetch, but kept for compatibility */}
      <form action="/logout" method="post" className="w-full hidden">
        <Button
          type="submit"
          className="bg-transparent hover:bg-transparent shadow-none w-full text-left p-0 text-black"
        >
          Logout
        </Button>
      </form>
    </DropdownMenuItem>
  );
}
