export default function BenefitSection() {
  const benefits = [
    {
      icon: "💬",
      title: "Chat-first",
      description: "Talk with Sprout like a friend. No complicated budgeting forms or confusing charts."
    },
    {
      icon: "🌱",
      title: "Zero-stress habits",
      description: "Simple daily check-ins grow into strong money habits, one message at a time."
    },
    {
      icon: "🎓",
      title: "Built for students",
      description: "From irregular paychecks to roommate splits, we get campus life budgeting challenges."
    }
  ];

  return (
    <section className="py-16 container-custom">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center"
            style={{ height: '260px' }}
          >
            <div className="text-4xl mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 