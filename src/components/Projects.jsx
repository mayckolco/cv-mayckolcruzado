import { HiArrowRight } from 'react-icons/hi'
import { projects } from '../data/portfolio'
import FadeIn from './FadeIn'

function ProjectCard({ project, delay }) {
  return (
    <FadeIn delay={delay}>
      <a
        href={project.link}
        className="block group rounded-xl overflow-hidden border border-border bg-card hover:shadow-sm transition-shadow"
      >
        <div className="aspect-[4/3] bg-surface overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.parentNode.classList.add('flex', 'items-center', 'justify-center')
              e.target.style.display = 'none'
            }}
          />
        </div>
        <div className="p-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-primary">{project.title}</p>
            <p className="text-xs text-secondary mt-0.5">{project.category}</p>
          </div>
          <HiArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-0.5 transition-transform" />
        </div>
      </a>
    </FadeIn>
  )
}

export default function Projects() {
  return (
    <div className="card" id="projects">
      <span className="section-label">Projects</span>
      <div className="grid grid-cols-2 gap-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={i * 0.05} />
        ))}
      </div>
    </div>
  )
}
