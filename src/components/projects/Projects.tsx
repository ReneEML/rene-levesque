import * as React from 'react';

import { projects } from '@/constants/constants';

import ProjectCard from './ProjectCard';
import Container from '../util/Container';
import Hr from '../util/Hr';

export default function Projects() {
  return (
    <Container>
      <div className='pb-8' id='projects'>
        <Hr />
        <h1 className='font-medium'>Projects</h1>
      </div>
      <div className='grid w-full gap-4 px-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project_${index}`}
            image={project.image}
            title={project.title}
            tags={project.tags}
            codeLink={project.codeLink}
            demoLink={project.demoLink}
            description={project.description}
          />
        ))}
      </div>
    </Container>
  );
}
