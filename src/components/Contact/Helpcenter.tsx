import React from "react";

export default function Helpcenter() {
  return (
    <div className="lg:main-container px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {["Help Center", "Business Inquiries", "Legal Inquiries"].map(
          (title, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-800 to-blue-600 p-8 rounded-lg text-white shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="mb-6">
                If you have a great idea or something to discuss, we are ready
                to help.
              </p>

              <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition duration-300">
                CALL US
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
