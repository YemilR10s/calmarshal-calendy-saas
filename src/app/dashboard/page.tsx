import requiereUser from "../lib/hook"


export default async  function DashboardPage() {
  const session = await requiereUser()



    return(
        <div className="">
            <h1>Hello form dashboard</h1>
        </div>
    )
    
}