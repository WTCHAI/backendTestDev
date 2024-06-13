import AddingUser from "@/components/user/addingUser";
import UserRender from "@/components/user/gettingUser";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-300 py-[5vh]">
      <section className="flex flex-col justify-center items-center" >
        <p>
          Hello Eto nun eGo
        </p>
        <AddingUser/>
        <UserRender/>        
      </section>
    </main>
  );
}
