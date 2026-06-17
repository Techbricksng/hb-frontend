import { useState } from 'react';
import { Link } from "react-router-dom";
import { Search, MessageCircle, Phone, MoreVertical, Filter } from 'lucide-react';
import CustomerHeader from './CustomerHeader';
import agent1 from '../../../assets/1.png';
import agent2 from '../../../assets/2.png';
import agent3 from '../../../assets/3.png';
import agent4 from '../../../assets/4.png';
import agent5 from '../../../assets/5.png';
import agent6 from '../../../assets/6.png';

interface Agent {
  id: string;
  name: string;
  company: string;
  email: string;
  contact: string;
  priority: number;
  lastContacted: string;
  avatar: string;
}

const AgentManagementPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleRealtorClick = (agentId: string, agentName: string) => {
    console.log(`Navigating to realtor details for: ${agentName} (ID: ${agentId})`);
    // Add your navigation logic here
  };

  const agents: Agent[] = [
    {
      id: '1',
      name: 'Abraham Joe',
      company: 'Ashiru Homes',
      email: 'info@ashiru.com',
      contact: '+2349077444264',
      priority: 3,
      lastContacted: '20/01/2019',
      avatar: agent1
    },
    {
      id: '2',
      name: 'Hanat Admasu',
      company: 'Ashiru Homes',
      email: 'info@ashiru.com',
      contact: '+2349077442263',
      priority: 4,
      lastContacted: '24/01/2019',
      avatar: agent2
    },
    {
      id: '3',
      name: 'Nicholas Solomon',
      company: 'Ashiru Homes',
      email: 'nicholas@gmail.com',
      contact: '+2349077442263',
      priority: 3,
      lastContacted: '20/01/2019',
      avatar: agent3
    },
    {
      id: '4',
      name: 'Samuel Felix',
      company: 'Ashiru Homes',
      email: 'samuel@gmail.com',
      contact: '+2349077441263',
      priority: 5,
      lastContacted: '20/01/2019',
      avatar: agent4
    },
    {
      id: '5',
      name: 'John Michael',
      company: 'Ashiru Homes',
      email: 'johnmichael@gmail.com',
      contact: '+2349077441260',
      priority: 4,
      lastContacted: '21/01/2019',
      avatar: agent5
    },
    {
      id: '6',
      name: 'Moses Buka',
      company: 'Ashiru Homes',
      email: 'mosesbuka@gmail.com',
      contact: '+2349077444266',
      priority: 5,
      lastContacted: '21/01/2019',
      avatar: agent6
    }
  ];

  const filteredAgents = agents.filter(agent =>
    agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    agent.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    agent.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 bg-gray-50 min-h-screen">
      {/* Top Header */}
      <CustomerHeader />

      {/* Main Content */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Agent</h1>
              <p className="text-sm text-gray-500 mt-1">Manage Agents (39)</p>
            </div>
            
            {/* Search and Settings */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search here..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-48"
                />
              </div>
              <button className="p-2 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100">
                <Filter className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Agent Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Agent
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Priority
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Last Contacted
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredAgents.map((agent) => (
                  <tr key={agent.id} className="hover:bg-gray-50">
                   {/* Agent */}
<td className="px-6 py-4 whitespace-nowrap">
  <div className="flex items-center">
    <div className="w-8 h-8 rounded-full overflow-hidden mr-3 flex-shrink-0">
      <img
        src={agent.avatar}
        alt={agent.name}
        className="w-full h-full object-cover "
      />
    </div>
    <Link
  to={`/my-realtor-details?id=${agent.id}`}
  className="text-sm font-medium text-black hover:text-gray-700 no-underline cursor-pointer text-left"
>
  {agent.name}
</Link>

  </div>
</td>
                    
                    {/* Company */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-700">{agent.company}</span>
                    </td>
                    
                    {/* Email */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-blue-600 underline cursor-pointer hover:text-blue-800">
                        {agent.email}
                      </span>
                    </td>
                    
                    {/* Contact */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-700">{agent.contact}</span>
                    </td>
                    
                    {/* Priority */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        {agent.priority}
                      </span>
                    </td>
                    
                    {/* Last Contacted */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-700">{agent.lastContacted}</span>
                    </td>
                    
                    {/* Action */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                          <MessageCircle className="w-4 h-4 text-white" />
                        </button>
                        <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                          <Phone className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <MoreVertical className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentManagementPage;