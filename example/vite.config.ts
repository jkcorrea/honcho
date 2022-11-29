import Honcho from 'honchojs/vite-plugin'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [Honcho()],
}

export default config
