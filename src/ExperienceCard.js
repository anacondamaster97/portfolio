import React, { useState } from 'react';

const ExperienceCard = ({ image, title, company, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="border p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100" onClick={togglePopup}>
        {company == "Travel AI" ? <img src={image} alt={title} className="w-full h-32 object-top rounded-md" /> :<img src={image} alt={title} className="w-full h-32 object-cover rounded-md" />}
        <h3 className="text-xl mt-4">{title}</h3>
        <p className="text-gray-600">{company}</p>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
            <button onClick={togglePopup} className="float-right text-gray-600 hover:text-gray-900">X</button>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-gray-600 mb-4">{company}</p>
            <p>{description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ExperienceCard;
