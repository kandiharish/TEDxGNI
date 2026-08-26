import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = '/TEDxGNI/'
const mediaExtensions = '(?:png|jpe?g|webp|avif|gif|svg|ico|mp4|webm|pdf)'

// GitHub Pages serves the app from /TEDxGNI/ instead of /
// Rewrite root-relative public assets used in JSX/CSS.
const githubPagesAssetPaths = {
  name: 'github-pages-asset-paths',
  enforce: 'post',
  transform(code, id) {
    if (!id.includes('/src/')) return null

    let transformed = code

    // JSX/JS strings such as src="/speaker.jpg" or poster="/speaker.jpg"
    transformed = transformed.replace(
      new RegExp('(["\\\'`])\\/([^"\\\'`]+\\.' + mediaExtensions + ')\\1', 'g'),
      '$1' + base + '$2$1'
    )

    // CSS URLs such as url('/speaker-big-stage.jpg')
    transformed = transformed.replace(
      new RegExp('url\\((["\\\']?)\\/([^"\\\')]+\\.' + mediaExtensions + ')\\1\\)', 'g'),
      'url($1' + base + '$2$1)'
    )

    return transformed === code ? null : { code: transformed, map: null }
  },
}

export default defineConfig({
  plugins: [react(), githubPagesAssetPaths],
  base,
})
