import React from "react";
import DashNav from "../components/DashNav";

const Dashboard = () => {
  return (
    <>
      <DashNav />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex flex-col items-center justify-center">
              <h1 className="italic text-xl">Your dashboard</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
