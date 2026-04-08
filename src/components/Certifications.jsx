import { HiArrowRight, HiCalendar } from 'react-icons/hi'
import { certifications } from '../data/portfolio'
import FadeIn from './FadeIn'

export default function Certifications() {
  return (
    <FadeIn>
      <div className="card" id="certifications">
        <span className="section-label">Certification</span>
        <div className="space-y-0">
          {certifications.map((cert, i) => (
            <FadeIn key={cert.id} delay={i * 0.05}>
              <a
                href={cert.link}
                className="flex items-center justify-between py-4 border-b border-border last:border-0 last:pb-0 group"
              >
                <div>
                  <p className="text-sm font-medium text-primary">{cert.title}</p>
                  <p className="inline-flex items-center gap-1 text-xs text-secondary mt-1">
                    <HiCalendar className="w-3 h-3" />
                    {cert.date}
                  </p>
                </div>
                <HiArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-0.5 transition-transform shrink-0" />
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}
