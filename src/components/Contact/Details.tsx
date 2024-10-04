import { detailsContact } from "@/utils/contact/indexDetails";
import React from "react";

export default function Details() {
  return (
    <div className="lg:main-container px-2 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {detailsContact.map((detail) => (
          <div
            key={detail.id}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4"
          >
            <div className="bg-blue-500 text-white rounded-full p-3">
              <detail.icon className="text-3xl" />
            </div>
            <h3 className="text-lg font-semibold capitalize">{detail.title}</h3>
            <p className="text-md text-gray-600">{detail.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
