import { auth } from "@clerk/nextjs/server";
import Navbar from "../_components/navBar";
import { redirect } from "next/navigation";

const SubscriptionPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in");
  }

  return <Navbar />;
};

export default SubscriptionPage;
