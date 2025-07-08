import { useState } from 'react';
import ProfileChanges from '../ProfileChanges';

function Profile() {
  const [activeTab, setActiveTab] = useState('personal');

  const tabs = [
    { id: 'personal', label: 'Personal Info' },
    { id: 'health', label: 'Health Info' },
    { id: 'appointments', label: 'Appointments' },
    { id: 'settings', label: 'Settings' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'personal':
        return (
            <ProfileChanges/>
        )
      case 'appointments':
        return(
            <>
            <MyAppointments/>
            </>
        );
      case 'settings' :
        return(
            <>
            <Settings/>
            </>
        );
      case 'health':
        return(
            <></>
        );
      default:
        return (
          <div className="bg-white p-6 shadow rounded-lg">
            <p className="text-gray-500">This section is under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-xl">
      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow p-6 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img src="https://img.icons8.com/ios-filled/100/user-male-circle.png" alt="User" className="w-16 h-16" />
          <div>
            <h2 className="text-xl font-semibold">John Anderson</h2>
            <p className="text-gray-600">john.anderson@email.com</p>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
        </div>
        <button className="bg-gray-800 text-white px-4 py-2 rounded w-full md:w-auto">
          ✏️ Edit Profile
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b flex flex-wrap gap-2 md:gap-4 overflow-x-auto px-4 py-2 rounded-t-lg shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-t-md font-medium whitespace-nowrap ${
              activeTab === tab.id ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
}

export default Profile;
