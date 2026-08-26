import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = '/TEDxGNI/'
const imageExtensions = '(?:png|jpe?g|webp|avif|gif|svg|ico)'

// GitHub Pages serves the app from /TEDxGNI/ rather than /
// Rewrite root-relative image references used in JSX/CSS so existing
// public/ assets continue to work without changing every component.
const githubPagesAssetPaths = {
  name: 'github-pages-asset-paths',
  enforce: 'post',
  transform(code, id) {
    if (!id.includes('/src/')) return null

    let transformed = code

    // JSX/JS strings such as src="/speaker.jpg"
    transformed = transformed.replace(
      new RegExp(`([\\\"'\\`])\\/([^\\\"'\\`]+\\.${imageExtensions})\\1`, 'g'),
      `$1${base}$2$1`
    )

    // CSS URLs such as url('/speaker-big-stage.jpg')
    transformed = transformed.replace(
      new RegExp(`url\\((\\\"'?)\\/([^\\\"'\\)]+\\.${imageExtensions})\\1\\)`, 'g'),
      `url($1${base}$2$1)`
    )

    return transformed === code ? null : { code: transformed, map: null }
  },
}

export default defineConfig({
  plugins: [react(), githubPagesAssetPaths],
  base,
})
