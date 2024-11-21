import { ReactNode } from "react";


export default function LayoutDashboard({children}:{children:ReactNode}){

    return(
        <div className="">
            <h1>Hello from the dashboard layout</h1>
            {children}
        </div>
    )
}