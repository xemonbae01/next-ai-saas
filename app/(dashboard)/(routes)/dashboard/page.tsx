import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div>
      <h1>This is a dashboard page</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashboardPage;
