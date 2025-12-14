import { useState, useEffect, useRef } from 'react';
import { FaGraduationCap, FaBriefcase, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { aboutData, testimonials } from '../../data/data';
import { useCounter } from '../../hooks/useCounter';

// Animated Skill Component
const AnimatedSkill = ({ name, level, isVisible }) => {
  const percentage = useCounter(level, 1500, isVisible);

  return (
    <div className="card p-6 animate-slide-up">
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-slate-800 dark:text-slate-200">
          {name}
        </span>
        <span className="text-primary-600 dark:text-primary-400 font-bold">
          {percentage}%
        </span>
      </div>
      <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label={`${name} proficiency`}
        />
      </div>
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => (
  <div className="card p-8 lg:p-12 min-w-full flex-shrink-0">
    {/* Stars */}
    <div className="flex justify-center gap-1 mb-6">
      {[...Array(testimonial.rating)].map((_, i) => (
        <FaStar key={i} className="text-yellow-500" size={24} />
      ))}
    </div>

    {/* Testimonial Text */}
    <blockquote className="text-lg text-center text-slate-700 dark:text-slate-300 mb-8 italic">
      "{testimonial.text}"
    </blockquote>

    {/* Client Info */}
    <div className="flex items-center justify-center gap-4">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full object-cover"
        loading="lazy"
      />
      <div className="text-left">
        <div className="font-bold text-slate-800 dark:text-slate-200">
          {testimonial.name}
        </div>
        <div className="text-sm text-slate-600 dark:text-slate-400">
          {testimonial.role}
        </div>
      </div>
    </div>
  </div>
);

const AboutSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !skillsVisible) {
          setSkillsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (skillsContainerRef.current) {
      observer.observe(skillsContainerRef.current);
    }

    return () => {
      if (skillsContainerRef.current) {
        observer.unobserve(skillsContainerRef.current);
      }
    };
  }, [skillsVisible]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    if (index !== currentTestimonial) {
      setCurrentTestimonial(index);
    }
  };

  const handleKeyDown = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <section id="about" className="section">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        {/* Introduction */}
        <div className="card p-8 lg:p-12 mb-16 animate-slide-up">
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line">
            {aboutData.description}
          </p>
        </div>

        {/* Skills */}
        <div className="mb-16" ref={skillsContainerRef}>
          <h3 className="text-2xl font-display font-bold mb-8">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutData.skills.map((skill) => (
              <AnimatedSkill
                key={skill.name}
                name={skill.name}
                level={skill.level}
                isVisible={skillsVisible}
              />
            ))}
          </div>
        </div>

        {/* Experience & Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold mb-8">
            Experience & Education
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Work Experience */}
            <div>
              <h4 className="flex items-center gap-2 text-xl font-semibold mb-6 text-primary-600 dark:text-primary-400">
                <FaBriefcase />
                Work Experience
              </h4>
              <div className="space-y-6">
                {aboutData.experience
                  .filter((item) => item.type === 'work')
                  .map((item, index) => (
                    <div
                      key={item.id}
                      className="card p-6 border-l-4 border-primary-600 animate-slide-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="text-sm text-primary-600 dark:text-primary-400 font-semibold mb-1">
                        {item.period}
                      </div>
                      <h5 className="text-lg font-bold mb-1">
                        {item.title}
                      </h5>
                      <div className="text-slate-600 dark:text-slate-400 mb-2">
                        {item.organization}
                      </div>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h4 className="flex items-center gap-2 text-xl font-semibold mb-6 text-primary-600 dark:text-primary-400">
                <FaGraduationCap />
                Education
              </h4>
              <div className="space-y-6">
                {aboutData.experience
                  .filter((item) => item.type === 'education')
                  .map((item, index) => (
                    <div
                      key={item.id}
                      className="card p-6 border-l-4 border-primary-600 animate-slide-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="text-sm text-primary-600 dark:text-primary-400 font-semibold mb-1">
                        {item.period}
                      </div>
                      <h5 className="text-lg font-bold mb-1">
                        {item.title}
                      </h5>
                      <div className="text-slate-600 dark:text-slate-400 mb-2">
                        {item.organization}
                      </div>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div>
          <h3 className="text-2xl font-display font-bold mb-8 text-center">
            Client Testimonials
          </h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              {/* Carousel Track */}
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                onKeyDown={(e) => handleKeyDown(e, prevTestimonial)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-primary-600 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                      index === currentTestimonial
                        ? 'bg-primary-600 w-8'
                        : 'bg-slate-300 dark:bg-slate-700'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-current={index === currentTestimonial}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                onKeyDown={(e) => handleKeyDown(e, nextTestimonial)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-primary-600 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
