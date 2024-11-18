import { ArrowRight } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Stage } from "@/components/stage"

export const metadata = {
  title: "Moderation",
  description: "Keep yourself safe out there!",
}

export default function CommunityPage() {
  return (
    <main className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-4">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          moderation <a>tools</a>
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          this is a very non-exhaustive list of moderation tools 
          that can help keep lgbtq+ hate off of your feed. none
          are maintained by me, but each is reputable and worth
          considering if you wanna keep the skyline clean {":)"}
        </p>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          i'll be continuously adding to this list as more moderation
          tools show up on my radar. feel free to @{" "}
          <a href="https://bsky.app/profile/did:plc:4ti3bft4vjtbah4vlwocdooj" className="underline">
              me
          </a>{" "}me on bluesky if you have any recommendations!
        </p>
      </div>
      
      <div>

      <div className="flex max-w-[980px] flex-col items-start gap-4">
        <h3 className="text-2xl font-bold leading-tight tracking-tighter sm:text-2xl md:text-4xl lg:text-4xl">
          <a href="https://bsky.app/profile/did:plc:4ugewi6aca52a62u62jccbl7" className="underline">
            asuka field
          </a>
        </h3>
        <p>
          a widely-used labeling service that deals with transphobia,
          transmisogyny, and enbyphobia
        </p>   
      </div>

      <div className="flex max-w-[980px] flex-col items-start gap-4">
        <h3 className="text-2xl font-bold leading-tight tracking-tighter sm:text-2xl md:text-4xl lg:text-4xl">
          <a href="https://bsky.app/profile/did:plc:hzlrd6vbu4cxg4cnjzofzpul/lists/3l2lyvtks442a" className="underline">
            a very british bigotry
          </a>
        </h3>
        <p>
          a fun little list by{" "}
          <a href="https://bsky.app/profile/did:plc:hzlrd6vbu4cxg4cnjzofzpul" className="underline">
            @hedgehogsafety.bsky.social
          </a>{" "}
          that deals in a certain type of british
          transphobia{" (you know, the wizards and witches kind)"}
        </p>
      </div>

      <div className="flex max-w-[980px] flex-col items-start gap-4">
        <h3 className="text-2xl font-bold leading-tight tracking-tighter sm:text-2xl md:text-4xl lg:text-4xl">
          <a href="https://bsky.app/profile/did:plc:53kudcqj7sizx2eaclc5sicc/lists/3lb3fjynrny2d" className="underline">
            a very british bigotry
          </a>
        </h3>
        <p>
          an expansive list by{" "}
          <a href="https://bsky.app/profile/did:plc:53kudcqj7sizx2eaclc5sicc" className="underline">
              @bennie.gay
          </a>{" "}
          that handles particularly nasty TERFs and transphobes
        </p>
      </div>

      </div>
    </main>
  )
}
