import React from "react";

function Section3() {
  const reasons = [
    {
      title: "Expert Instructors",
      description: "Learn from highly qualified and experienced professionals."
    },
    {
      title: "Flexible Learning",
      description: "Study at your own pace with 24/7 access to materials."
    },
    {
      title: "Industry-Relevant Skills",
      description: "Gain knowledge that matches current market demands."
    },
  ];

  const reviews = [
    {
      name: "Aarav Sharma",
      comment: "This platform transformed my career! Highly recommend.",
      rating: 5
    },
    {
      name: "Priya Singh",
      comment: "The instructors are fantastic and the lessons are practical.",
      rating: 4
    },
    {
      name: "Rohan Kumar",
      comment: "Excellent experience and well-structured courses.",
      rating: 5
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6 lg:px-20 h-screen bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
      {/* Why Choose Us Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Why Choose Us
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Student Reviews
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <div className="flex items-center mb-4">
                {/* <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-bold">
                  {review.name.charAt(0)}
                </div> */}
                <div className="ml-4">
                  
                  {/* <div className="flex text-yellow-400">
                    {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                  </div> */}
                </div>
              </div>
              <p className="text-gray-600 italic">"{review.comment}"</p><br />
              <h4 className="font-semibold text-gray-700 ml-[16pc]">-{review.name}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
export default Section3
