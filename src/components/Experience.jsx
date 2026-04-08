import { HiCalendar, HiLocationMarker } from 'react-icons/hi'
import { experience } from '../data/portfolio'
import FadeIn from './FadeIn'

function ExperienceItem({ item, delay }) {
  return (
    <FadeIn delay={delay}>
      <div className="flex gap-4">
        <div
          className="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center text-white text-sm font-semibold mt-0.5"
          style={{ backgroundColor: item.color }}
        >
          {item.initial}
        </div>
        <div className="flex-1 pb-6 border-b border-border last:border-0 last:pb-0">
          <p className="text-xs text-secondary mb-0.5">{item.company}</p>
          <p className="text-sm font-semibold text-primary">{item.role}</p>
          <p className="text-xs text-secondary leading-relaxed mt-2">{item.description}</p>
          <div className="flex flex-wrap gap-3 mt-3">
            <span className="inline-flex items-center gap-1 text-xs text-secondary">
              <HiCalendar className="w-3 h-3" />
              {item.period}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-secondary">
              <HiLocationMarker className="w-3 h-3" />
              {item.location}
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

export default function Experience() {
  return (
    <FadeIn>
      <div className="card" id="experience">
        <span className="section-label">Experience</span>
        <div className="space-y-0">
          {experience.map((item, i) => (
            <ExperienceItem key={item.id} item={item} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </FadeIn>
  )
}
