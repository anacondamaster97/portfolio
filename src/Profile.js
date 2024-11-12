import React from 'react';
import pic from './Me.jpg'

const Profile = () => {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 bg-white shadow-lg rounded-lg p-10 max-w-3xl mx-auto mt-10">
      {/* Profile Image */}
      
      {/* Profile Info */}
      <div className="text-center md:text-left">
        <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-[radial-gradient(circle,black_1px,transparent_1px)] bg-[length:2px_2px]">Pranav Uppiliappan</h1>
        <p className="text-gray-600 mb-6 leading-relaxed text-transparent bg-clip-text bg-[radial-gradient(circle,black_1px,transparent_1px)] bg-[length:2px_2px]">
         Relax. Your eyesight is fine, take a deep breath and enjoy. I love building things, cooking, playing the guitar, singing, and I'm trying to write a book.
        </p>
        <div className="flex justify-center md:justify-start space-x-6 text-transparent">
          <a href="mailto:pranavuppiliappan@gmail.com" className="text-blue-500 hover:text-blue-600 transition duration-200">Email</a>
          <a href="https://linkedin.com/in/pranav-uppiliappan" className="text-blue-500 hover:text-blue-600 transition duration-200">LinkedIn</a>
          <a href="https://github.com/anacondamaster97" className="text-blue-500 hover:text-blue-600 transition duration-200">GitHub</a>
        </div>
      </div>
      <img src={pic} alt="Profile" className="w-100 h-100 object-cover object-center overflow-hidden rounded-full border-4 border-blue-500 shadow-lg" />

    </div>
  );
};

export default Profile;
