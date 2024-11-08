import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import NavBar from "./_components/navBar";

const Home = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  return (
    <div className="flex h-full items-center justify-center">
      <NavBar />
    </div>
  );
};

export default Home;
