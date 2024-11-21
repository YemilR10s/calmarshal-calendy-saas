'use client'
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useFormStatus } from "react-dom"


export  function AuthGoogleButton() {

    const {pending} = useFormStatus()

    return(
        <>
        {pending? 
            (
                <Button className="w-full">
                    <Loader2 className="animate-spin"/> plase wait
                </Button>
            )
            :
            (
                <Button className="w-full">Sing in with Google</Button>

            )
        }
        
        </>
    )
    
}

export  function AuthGithubButton() {

    const {pending} = useFormStatus()

    return(
        <>
        {pending? 
            (
                <Button className="w-full">
                    <Loader2 className="animate-spin"/> plase wait
                </Button>
            )
            :
            (
                <Button className="w-full">Sing in with Github</Button>

            )
        }
        
        </>
    )
    
}