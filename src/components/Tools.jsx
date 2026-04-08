import {
  SiVscodium,
  SiFigma,
  SiReact,
  SiGit,
} from 'react-icons/si'
import { tools } from '../data/portfolio'
import FadeIn from './FadeIn'

const iconMap = {
  vscode: SiVscodium,
  figma: SiFigma,
  react: SiReact,
  git: SiGit,
}

function ToolCard({ tool, delay }) {
  const Icon = iconMap[tool.icon]

  return (
    <FadeIn delay={delay}>
      <div className="card-sm flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${tool.color}18` }}
        >
          {Icon && <Icon className="w-5 h-5" style={{ color: tool.color }} />}
        </div>
        <div>
          <p className="text-sm font-medium text-primary">{tool.name}</p>
          <p className="text-xs text-secondary">{tool.category}</p>
        </div>
      </div>
    </FadeIn>
  )
}

export default function Tools() {
  return (
    <FadeIn>
      <div className="card" id="tools">
        <span className="section-label">Tools</span>
        <div className="grid grid-cols-2 gap-3">
          {tools.map((tool, i) => (
            <ToolCard key={tool.id} tool={tool} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </FadeIn>
  )
}
