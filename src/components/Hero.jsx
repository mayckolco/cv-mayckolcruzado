import { HiDownload, HiMail } from 'react-icons/hi'
import { profile } from '../data/portfolio'
import FadeIn from './FadeIn'

export default function Hero() {
  return (
    <FadeIn>
      <div className="card flex flex-col sm:flex-row gap-5 items-start sm:items-center">
        <div className="relative shrink-0">
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-20 h-20 rounded-2xl object-cover bg-border"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          <div
            className="w-20 h-20 rounded-2xl bg-border hidden items-center justify-center text-2xl font-semibold text-secondary"
            style={{ display: 'none' }}
          >
            {profile.name.charAt(0)}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
            <span className="text-xs text-secondary">Available for Work</span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-primary leading-tight">
            {profile.name}
          </h1>
          <p className="text-sm text-secondary mt-0.5">{profile.role}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary border border-border rounded-lg px-3 py-2 hover:bg-surface transition-colors"
            >
              <HiDownload className="w-3.5 h-3.5" />
              Download CV
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary border border-border rounded-lg px-3 py-2 hover:bg-surface transition-colors"
            >
              <HiMail className="w-3.5 h-3.5" />
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
