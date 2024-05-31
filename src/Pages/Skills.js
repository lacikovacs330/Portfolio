import React, { useState, useEffect, useRef, useMemo } from 'react';
import '../Styles/styles.css';

function Skills() {
  const skills = useMemo(() => [
    { name: 'HTML5', percentage: 80, color: 'bg-red-500' },
    { name: 'Cascading Style Sheets (CSS)', percentage: 80, color: 'bg-indigo-500' },
    { name: 'SASS', percentage: 80, color: 'bg-pink-500' },
    { name: 'JavaScript', percentage: 60, color: 'bg-yellow-500' },
    { name: 'Figma', percentage: 60, color: 'bg-green-500' },
    { name: 'React.js', percentage: 40, color: 'bg-blue-300' },
    { name: 'React Native', percentage: 20, color: 'bg-blue-300' },
    { name: 'PHP', percentage: 80, color: 'bg-gray-500' },
    { name: 'MySQL', percentage: 60, color: 'bg-orange-500' },
    { name: 'phpMyAdmin', percentage: 60, color: 'bg-gray-300' }
  ], []);

  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef(null);
  const [percentageStates, setPercentageStates] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const currentSkillRef = skillRef.current;

    if (currentSkillRef) {
      observer.observe(currentSkillRef);
    }

    return () => {
      if (currentSkillRef) {
        observer.unobserve(currentSkillRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const initialPercentageStates = {};
      skills.forEach((skill) => {
        initialPercentageStates[skill.name] = 0;
      });
      setPercentageStates(initialPercentageStates);
    }
  }, [isVisible, skills]);

  useEffect(() => {
    if (isVisible) {
      const intervalId = setInterval(() => {
        let updatedStates = { ...percentageStates };
        let allCompleted = true;

        skills.forEach((skill) => {
          const currentPercentage = percentageStates[skill.name] || 0;
          if (currentPercentage < skill.percentage) {
            const newPercentage = Math.floor(currentPercentage + 1);
            updatedStates[skill.name] = newPercentage;
            allCompleted = false;
          }
        });

        setPercentageStates(updatedStates);

        if (allCompleted) {
          clearInterval(intervalId);
        }
      }, 25);

      return () => clearInterval(intervalId);
    }
  }, [isVisible, percentageStates, skills]);

  return (
    <section id="skills" className="lg:h-[100vh] bg-black h-full" ref={skillRef}>
      <div className="container page-wrapper mx-auto">
        <div className="w-full uppercase text-center lg:text-left font-bold h-auto">
          <h1 className="text-xl text-white">Skills</h1>
          <hr className="border-gray-300 w-full my-1" />
        </div>

        <div className="w-full h-[95%] flex flex-col justify-center items-center">
          {skills.map((skill, index) => (
            <div className='w-full p-2 xl:p-0' key={index}>
              <div className="text-base font-medium text-white dark:text-white mb-6 mt-2">{skill.name}</div>
              <div className="relative w-full bg-gray-200 rounded-full h-2 mb-4 my-2 dark:bg-white">
                <div
                  className={`h-2 rounded-full ${skill.color} relative`}
                  style={{ '--width': `${percentageStates[skill.name] || 0}%`, width: `${percentageStates[skill.name] || 0}%` }}
                >
                  <div className={`absolute right-0 transform translate-x-1/3 -translate-y-1/4 w-4 h-4 ${skill.color} rounded-full`}></div>
                    <div className="absolute right-0 transform translate-x-1/2 -translate-y-6 text-xs text-white">
                      {Math.floor(percentageStates[skill.name] || 0)}%
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
