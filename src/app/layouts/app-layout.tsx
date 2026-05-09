import { Outlet } from "react-router-dom";
import { Header } from "../../widgets/header";
import { useOverflowStore } from "@shared/lib";
import { Footer } from "@widgets/footer";

export function AppLayout() {
  const isOverflow = useOverflowStore(state => state.isOverflowActive)
  return (
    <div className="flex flex-col h-screen">
      <Header/>
      <div className="flex-grow">
        <Outlet/>
      </div>
      <Footer/>
      <div className={isOverflow ? "fixed top-[68px] sm:top-0 left-0 w-svw h-svh opacity-50 bg-black" : ""}></div>
    </div>
  )
}
