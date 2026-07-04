import { FaDumbbell, FaAppleAlt, FaLaptop } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Personal Training",
      description:
        "Customized workout plans designed for your fitness goals.",
      icon: <FaDumbbell size={40} />,
    },
    {
      id: 2,
      title: "Nutrition Plan",
      description:
        "Healthy meal plans to help you lose fat and build muscle.",
      icon: <FaAppleAlt size={40} />,
    },
    {
      id: 3,
      title: "Online Coaching",
      description:
        "Train from anywhere with continuous support and guidance.",
      icon: <FaLaptop size={40} />,
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-blue-600 font-semibold uppercase">
            Services
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Programs Designed For You
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Choose the training program that matches your goals and lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-2xl shadow-md hover:-translate-y-2 transition duration-300"
            >
              <div className="text-blue-600">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {service.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {service.description}
              </p>

              <button className="mt-6 text-blue-600 font-semibold hover:underline">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}