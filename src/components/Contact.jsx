import { HiArrowRight } from 'react-icons/hi'
import { socials } from '../data/portfolio'
import FadeIn from './FadeIn'

export default function Contact() {
  return (
    <FadeIn>
      <div className="card" id="contact">
        <div className="space-y-0">
          {socials.map((item, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center justify-between py-4 border-b border-border last:border-0 group"
              >
                <span className="text-xs text-secondary w-20 shrink-0">{item.label}</span>
                <span className="text-sm font-medium text-primary flex-1 text-right mr-3">
                  {item.value}
                </span>
                <HiArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-0.5 transition-transform shrink-0" />
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}
