import React from 'react';
import NavBar from '../componets/NavBar';

const AboutPage = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">EdTech Startup</h1>
            <p className="mt-2">Empowering Education, One Click at a Time</p>
          </div>
          

        </div>
      </header>

      {/* About Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="text-lg">
            EdTech Startup is on a mission to revolutionize education by providing innovative
            learning solutions. We believe in making quality education accessible to everyone,
            anywhere, and at any time.
          </p>
          <p className="text-lg mt-4">
            Our team of passionate educators and technologists work together to create engaging and
            interactive courses that cater to the diverse learning needs of our students.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Team Member Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p className="text-gray-600">Co-founder & CEO</p>
            </div>

            {/* Repeat the above structure for additional team member cards */}
          </div>
        </div>
      </section>

       
    </>
  );
};

export default AboutPage;
