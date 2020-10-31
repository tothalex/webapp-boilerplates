import { Injectable, OnModuleInit } from '@nestjs/common'
import next from 'next'

@Injectable()
export class ViewService implements OnModuleInit {
  private server: any

  async onModuleInit(): Promise<void> {
    try {
      const app = next({ dev: true, dir: './src/client' })
      await app.prepare()
      this.server = app
    } catch (error) {
      console.log(error)
    }
  }

  getViewServer(): any {
    return this.server
  }
}
