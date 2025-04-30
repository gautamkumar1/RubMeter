import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Icons } from "../icon";
import WaitlistForm from "../WaitlistForm";
import { Button } from "./button";
import avatar1 from "../../public/image/avatar1.jpg"
import avatar2 from "../../public/image/avatar2.png"
import avatar3 from "../../public/image/avatar3.jpg"
import Link from "next/link";

export default function Waitlist() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
    
    <main className="flex-1 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md mx-auto text-center space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Join the{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            RubMeter
          </span>{" "}
          waitlist
        </h1>
        <p className="text-zinc-400">Be the first to know when we launch. Enter your email below.</p>

        <WaitlistForm />
      </div>
      
      <div className="mt-12 flex flex-col items-center gap-8">
           
            <div className="flex gap-6 justify-center">
             <Link href="https://x.com/Paradoxical_xD" target="_blank" rel="noopener noreferrer">
             <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-gray-300"
              >
                <Icons.twitter className="w-5 h-5 fill-current" />
              </Button>
             </Link>
             <Link href="https://github.com/gautamkumar1" target="_blank" rel="noopener noreferrer">
             <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-gray-300"
              >
                <Icons.gitHub className="w-5 h-5 fill-current" />
              </Button>
             </Link>
              
            </div>
        </div>
    </main>

    <footer className="py-6 mt-auto">
      <div className="container mx-auto px-4 text-center text-zinc-600 text-sm">
        <p>© {new Date().getFullYear()} RubMeter. All rights reserved.</p>
      </div>
    </footer>
  </div>
  )
}
