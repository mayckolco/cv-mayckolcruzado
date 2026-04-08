import { HiCalendar, HiLocationMarker } from 'react-icons/hi'
import { education } from '../data/portfolio'
import FadeIn from './FadeIn'

function EducationItem({ item, delay }) {
  return (
    <FadeIn delay={delay}>
      <div className="pb-5 border-b border-border last:border-0 last:pb-0">
        <p className="text-xs text-secondary mb-0.5">{item.institution}</p>
        <p className="text-sm font-semibold text-primary">{item.degree}</p>
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
    </FadeIn>
  )
}

export default function Education() {
  return (
    <FadeIn>
      <div className="card" id="education">
        <span className="section-label">Education</span>
        <div className="space-y-0">
          {education.map((item, i) => (
            <EducationItem key={item.id} item={item} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </FadeIn>
  )
}
