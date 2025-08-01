import React from "react";

const AboutPage = () => {
  return (
    <div>
      {/* About Me Content */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-16">About Me</h1>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/assets/images/ayo-lawal.jpg"
                    alt="Ayo Lawal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">Ayo Lawal</h2>
              <p className="text-cyan-400 text-xl mb-6">Front-End Developer</p>

              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                I specialize in building modern, responsive web applications
                with a strong focus on user experience and performance. From
                crafting sleek, intuitive UIs with React.js, Next.js and Tailwind CSS, to
                integrating complex RESTful APIs using tools like Axios and
                Postman, I bring ideas to life through clean, scalable code. I
                enjoy turning design concepts into fully functional components,
                managing data flows, and ensuring seamless interactions across
                the frontend. Whether it's a custom dashboard, a content
                management tool, or a news publishing system, I build with
                maintainability and clarity in mind. I have also worked with tools
                like Next.js, Chart.js, and Framer Motion to deliver dynamic
                experiences, all while collaborating effectively in fast-paced
                teams using Git, Trello, and modern development workflows.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">What I Do</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Responsive Web Design & Development</li>
                  <li>• Modern JavaScript Frameworks (React, Next.js)</li>
                  <li>• RESTful API Integration & Management</li>
                  <li>• Cross-browser Compatibility</li>
                </ul>
              </div>

              <a
                href="/assets/resume/Ayo_Lawal_Resume.pdf"
                download="Ayo_Lawal_Resume.pdf"
                className="inline-block bg-gray-700 text-white px-8 py-3 rounded-md hover:bg-gray-600 transition-colors"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;