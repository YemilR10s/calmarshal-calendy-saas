import { redirect } from "next/navigation";
import { auth } from "./auth";


export default async function requiereUser() {

    const sesion = await auth()

    if(sesion?.user){
       return redirect('/')
    }
    return sesion


    
}