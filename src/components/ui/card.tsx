import React from "react";

export const Card = ({ children, ...props }) => (
  <div {...props} className="border rounded shadow p-4 bg-white">
    {children}
  </div>
);

export const CardHeader = ({ children, ...props }) => (
  <div {...props} className="mb-2 font-bold text-lg">
    {children}
  </div>
);

export const CardContent = ({ children, ...props }) => (
  <div {...props} className="text-sm text-gray-700">
    {children}
  </div>
);

export const CardTitle = ({ children, ...props }) => (
  <h3 {...props} className="font-semibold text-xl mb-1">
    {children}
  </h3>
);

export const CardDescription = ({ children, ...props }) => (
  <p {...props} className="text-gray-500 text-sm">
    {children}
  </p>
);
