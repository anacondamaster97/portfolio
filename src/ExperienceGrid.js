import React from 'react';
import ExperienceCard from './ExperienceCard';
import decision from './decision_logo.jpeg'
import ucsb from './ucsb.png'
import gossip from './gossip.png'
import food from './ingredients.jpg'
import travel from './logo.png'
import guitar from './guitar.jpg'
import vmware from './vmware.png'

const experiences = [
    { image: travel, title: 'Co-Founder/Founding Engineer', company: 'Travel AI', description: 'Building an AI agent for travelling easily' },
    { image: ucsb, title: 'Machine Learning Research Fellow', company: 'UC Santa Barbara', description: 'Worked on the use of clustering algorithms for large tax datasets as a Research Fellow' },
    { image: decision, title: 'Software Engineer Intern', company: 'Decision Minds', description: 'Due to a lack of engineering resources, I also build the data engineering observability platform that I did product research for' },
    { image: ucsb, title: 'Mentorship in Economics Advisory Board Member', company: 'UC Santa Barbara', description: 'Managed the entire undergraduate economics tutoring program with 400+ students' },
    { image: gossip, title: 'Gossip Protocol Project', company: 'Project in Github', description: 'Built a gossip protocol for a distributed computing graduate school class' },
    { image: decision, title: 'Product Management Intern', company: 'Decision Minds', description: 'Listened to a ton of engineers and podcasts about data engineering to build a comprehensive data observability platform.' },
    { image: food, title: 'Mamma Mia', company: 'AI Ingredients to Dishes', description: 'Finetuned an image to text model for ingredients and then used the text to generate a recipes with LLama 3-8b' },
    { image: guitar, title: 'Guitar Chord Progression Recommender', company: 'Geetar', description: 'I like playing the guitar and I want to help others learn to play the guitar. I built a simple model that recommends guitar chord progressions' },
    { image: vmware, title: 'Software Immersion Intern', company: 'Vmware', description: '1st ever group of high school software immersion interns' },
  
  // Add more experiences as needed
];

const ExperienceGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-clip-text bg-[radial-gradient(circle,blue_1px,transparent_1px)] bg-[length:2px_2px]">
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
    </div>
  );
};

export default ExperienceGrid;
