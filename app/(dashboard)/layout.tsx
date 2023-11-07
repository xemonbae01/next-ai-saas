import Navbar from "@/components/Navbar";
import Sideber from "@/components/Sidebar";
import { getApiLimit } from "@/lib/ApiLimit";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimit();

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
        <Sideber apiLimitCount={apiLimitCount} />
      </div>
      <main className=" md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
