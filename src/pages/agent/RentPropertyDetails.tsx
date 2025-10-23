import { useState } from 'react';
import DashboardSidebar from "../../components/dashboards/DashboardSidebar";
import AgentRentDetailsPage from '../../components/dashboards/agent-dashboard/RentPropertyDetails';

export default function AgentRentPropertiesDetails() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-[100vh] bg-[color:var(--color-bg)] font-poppins">
      {/* Sidebar - conditionally shown based on sidebarOpen state */}
      <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block flex-shrink-0`}>
        <DashboardSidebar  userRole="agent" />
      </div>
      <div className="flex-1 overflow-auto">
      <AgentRentDetailsPage />
        {/* Example toggle button - you can position it appropriately */}
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="fixed bottom-4 left-4 p-2 bg-gray-200 rounded-md md:hidden"
        >
          {sidebarOpen ? 'Hide' : 'Show'} Sidebar
        </button>
      </div>
    </div>
  );
}