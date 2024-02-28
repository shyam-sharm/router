import React from 'react';
import NavBar from '../componets/NavBar';

const CoursesPage = () => {
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

      {/* Courses Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Course Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Introduction to Programming</h3>
              <p className="text-gray-600">
                Dive into the world of programming with our comprehensive introductory course.
              </p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full">
                Enroll Now
              </button>
            </div>

            {/* Repeat the above structure for additional course cards */}
          </div>
        </div>
      </section>

    </>
  );
};

export default CoursesPage;
