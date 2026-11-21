import { profile } from '../data/resume'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-6 text-center text-sm text-white/50">
      © {new Date().getFullYear()} {profile.name}. All rights reserved.
    </footer>
  )
}
