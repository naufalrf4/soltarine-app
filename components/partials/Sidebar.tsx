import React from "react";
import {dashboardLinks} from '@/constants'

const Sidebar = () => {
  return (
    <div className="flex h-screen flex-col justify-between border-e bg-white">
      <div className="px-4 py-6">
        <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
          Logo
        </span>

        <ul className="mt-6 space-y-1">
            {dashboardLinks.map((link, index) => (
                <li key={index}>
                <a
                    href={link.path}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100"
                >
                    <span className="text-gray-600">{link.icon}</span>
    
                    <span className="text-sm font-medium text-gray-900">
                    {link.title}
                    </span>
                </a>
                </li>
            ))}
        </ul>
      </div>


    </div>
  );
};

export default Sidebar;
