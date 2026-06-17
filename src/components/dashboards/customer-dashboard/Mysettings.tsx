import { useState } from 'react';
import CustomerHeader from './CustomerHeader';

interface NotificationSetting {
  id: string;
  label: string;
  description?: string;
  enabled: boolean;
}

const MySettingsPage = () => {
  // State for notification settings
  const [notificationSettings, setNotificationSettings] = useState<NotificationSetting[]>([
    {
      id: 'property-update',
      label: 'Property Update',
      enabled: false
    },
    {
      id: 'event-update',
      label: 'Event Update',
      enabled: true
    },
    {
      id: 'discount-sales',
      label: 'Discount Sales',
      enabled: false
    }
  ]);

  const [advancedSettings, setAdvancedSettings] = useState<NotificationSetting[]>([
    {
      id: 'desktop-notification',
      label: 'Desktop Notification',
      description: 'Receive Notification about product update, importance announcement etc.',
      enabled: true
    },
    {
      id: 'email-notification',
      label: 'Email Notification',
      description: 'Receive email messages',
      enabled: true
    },
    {
      id: 'unread-badge',
      label: 'Enable Unread notification Badge',
      description: 'Receive Notification about product update, importance announcement etc.',
      enabled: true
    },
    {
      id: 'push-notification',
      label: 'Push Notification',
      enabled: true
    },
    {
      id: 'mobile-push-notification',
      label: 'Mobile Push Notification',
      enabled: true
    }
  ]);

  // Toggle function for notification settings
  const toggleNotificationSetting = (id: string, isAdvanced: boolean = false) => {
    if (isAdvanced) {
      setAdvancedSettings(prev =>
        prev.map(setting =>
          setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
        )
      );
    } else {
      setNotificationSettings(prev =>
        prev.map(setting =>
          setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
        )
      );
    }
  };

  // Toggle Switch Component
  const ToggleSwitch = ({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) => (
    <button
      onClick={onToggle}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        enabled ? 'bg-slate-700' : 'bg-gray-300'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );

  return (
    <div className="flex-1 bg-gray-50">
      {/* Top Header */}
      <CustomerHeader />

      {/* Main Content */}
      <div className="p-6">
        {/* Page Title */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Notification Settings</h2>
        </div>

        <div className="space-y-6">
          {/* Notify me when section */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Notify me when:</h3>
            
            <div className="space-y-6">
              {notificationSettings.map((setting) => (
                <div key={setting.id} className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-medium text-gray-900">{setting.label}</h4>
                    {setting.description && (
                      <p className="text-sm text-gray-500 mt-1">{setting.description}</p>
                    )}
                  </div>
                  <ToggleSwitch
                    enabled={setting.enabled}
                    onToggle={() => toggleNotificationSetting(setting.id)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Advanced notification settings */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="space-y-6">
              {advancedSettings.map((setting) => (
                <div key={setting.id} className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-900 mb-1">{setting.label}</h4>
                    {setting.description && (
                      <p className="text-sm text-gray-500">{setting.description}</p>
                    )}
                  </div>
                  <div className="ml-6">
                    <ToggleSwitch
                      enabled={setting.enabled}
                      onToggle={() => toggleNotificationSetting(setting.id, true)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySettingsPage;