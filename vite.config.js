import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { execFile } from 'node:child_process'

// In dev Vite non serve index.html per le cartelle di public/ (risponde con
// l'app React): le pagine statiche in public/progetti/ vanno riscritte a mano.
// GitHub Pages lo fa già da solo.
const pagineStatiche = {
  name: 'pagine-statiche',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (/^\/progetti\/[^/]+\/$/.test(req.url)) req.url += 'index.html'
      next()
    })

    // quando si salva il template dei litigi: rigenera la pagina, la ricopia
    // in public/ e ricarica il browser
    const template = path.resolve('../discorsi_camera/applausi/viz/litigi_template.html')
    let inCorso = false
    server.watcher.add(template)
    server.watcher.on('change', (file) => {
      if (path.resolve(file) !== template || inCorso) return
      inCorso = true
      server.config.logger.info('template dei litigi modificato, rigenero...')
      execFile('node', ['scripts/sync-litigi.mjs'], (err, _out, stderr) => {
        inCorso = false
        if (err) return server.config.logger.error(stderr || err.message)
        server.ws.send({ type: 'full-reload' })
      })
    })
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), pagineStatiche],
  base: '/'
})
