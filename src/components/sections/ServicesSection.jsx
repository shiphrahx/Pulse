import { Link } from 'react-router-dom';
import { FaCode, FaPaintBrush, FaMobile, FaServer, FaLightbulb, FaShoppingCart, FaArrowRight } from 'react-icons/fa';
import { services } from '../../data/data';

const iconMap = {
  FaCode,
  FaPaintBrush,
  FaMobile,
  FaServer,
  FaLightbulb,
  FaShoppingCart,
};

const ServicesSection = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">What I can do for you</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Link
                key={service.id}
                to={`/service/${service.id}`}
                className="card p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group animate-slide-up focus-outline"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary-500/10 text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold mb-3 text-slate-800 dark:text-slate-100">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold group-hover:gap-3 transition-all duration-300">
                  Learn more
                  <FaArrowRight size={14} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
