
import React, { useState } from 'react';
import './homeSpecials.css';

const HomeSpecials: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'host' | 'customer'>('host');

  return (
    <div className="home-specials">
      <div className="tabs">
        <button
          className={activeTab === 'host' ? 'active' : ''}
          onClick={() => setActiveTab('host')}
        >
          Host Specials
        </button>
        <button
          className={activeTab === 'customer' ? 'active' : ''}
          onClick={() => setActiveTab('customer')}
        >
          Customer Offers
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'host' ? (
          <div>Host specials content goes here!</div>
        ) : (
          <div>Customer offers content goes here!</div>
        )}
      </div>
    </div>
  );
};

export default HomeSpecials;