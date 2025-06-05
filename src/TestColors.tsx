import React from 'react';

const TestColors: React.FC = () => (
  <div className="grid gap-4 p-6">
    <div className="bg-harmony text-white p-4 rounded">
      bg-harmony  #4F7FA8
    </div>

    <div className="bg-fresh text-harmony p-4 rounded">
      bg-fresh  #AFD5E7
    </div>

    <div className="bg-neutral-1 text-harmony p-4 rounded border">
      bg-neutral-1  #F7F6F2
    </div>
  </div>
);

export default TestColors;