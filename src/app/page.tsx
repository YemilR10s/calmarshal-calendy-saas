import { redirect } from "next/navigation";
import NavbarComponent from "./components/Navbar";
import { auth } from "./lib/auth";

export default  async function Home() {
  const session = await auth()
  if(session?.user){
    return redirect('/dashboard')
  }
  return (
    <div className="w-full bg-slate-700">
      <NavbarComponent/>
    </div>
  );
}
