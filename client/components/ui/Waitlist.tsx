import WaitlistForm from "../WaitlistForm";


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
      </main>

      <footer className="py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-zinc-600 text-sm">
          <p>© {new Date().getFullYear()} RubMeter. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
