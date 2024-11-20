import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { Button } from "./ui/button"
import Image from "next/image"
import { signIn } from "@/app/lib/auth"
import {AuthGithubButton, AuthGoogleButton} from "@/app/components/AuthGoogleButton"
  
  const DialogButton = () => {
    return (
      <>  
    <Dialog>
      <DialogTrigger asChild>
        <Button>Try for free</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[360px]">
        <DialogHeader className="flex flex-col gap-4">
          <DialogTitle><Image src='/next.svg' alt="" width={100} height={100}/></DialogTitle>
          <DialogDescription asChild>
            <div className="flex flex-col gap-4">
            <form action={async ()=>{
              "use server"
              await signIn('google')

            }}>
              <AuthGoogleButton/>
            </form>
            <form action={async ()=>{
              "use server"
              await signIn('github')

            }}>
              <AuthGithubButton/>
            </form>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </>
    )
  }
  
  export default DialogButton
