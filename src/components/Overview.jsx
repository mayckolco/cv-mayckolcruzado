import { profile } from '../data/portfolio'
import FadeIn from './FadeIn'

export default function Overview() {
  return (
    <FadeIn delay={0.05}>
      <div className="card" id="overview">
        <span className="section-label">Overview</span>
        <div className="space-y-3">
          {profile.overview.split('\n\n').map((para, i) => (
            <p key={i} className="text-sm text-secondary leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}
