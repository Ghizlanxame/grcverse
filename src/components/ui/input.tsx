import React from "react";

export const Input = (props) => (
  <input
    {...props}
    className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);
