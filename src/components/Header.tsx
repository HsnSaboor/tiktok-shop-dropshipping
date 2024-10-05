import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, BarChart2, Settings } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="flex items-center text-gray-700 hover:text-blue-600">
              <BarChart2 className="mr-2" size={20} />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/orders" className="flex items-center text-gray-700 hover:text-blue-600">
              <ShoppingBag className="mr-2" size={20} />
              Orders
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex items-center text-gray-700 hover:text-blue-600">
              <Settings className="mr-2" size={20} />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;