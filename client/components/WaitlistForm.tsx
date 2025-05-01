"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, Loader2 } from "lucide-react"
import { useMutation } from "@tanstack/react-query"
import { createWaitlist } from "@/apis/apis"
import { toast } from "sonner"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const mutation = useMutation({
    mutationFn: createWaitlist,
    onSuccess: (data: any) =>{
      toast.success(data.message)
    },
    onError: (error: any) => {
      setError(error.response.data.message)
      toast.error(error.response.data.message)
    },
  })
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    mutation.mutate({ email })
  }


  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      {mutation.isError && <p className="text-red-400 text-sm">{error}</p>}

      <div className="flex w-full max-w-md mx-auto gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-zinc-900 border-zinc-800 focus:border-emerald-500"
          required
        />
        <Button
          type="submit"
          className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Notify Me"}
        </Button>
      </div>
    </form>
  )
}
