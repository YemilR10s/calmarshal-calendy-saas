import {requireUser} from "../lib/hooks"


export default async  function DashboardPage() {
  const session = await requireUser()

    return(
        <div className="">
            <h1>Hello form dashboard</h1>
        </div>
    )
    
}