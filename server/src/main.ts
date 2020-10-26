import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const { PORT = 3000 } = process.env

  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('/api')
  await app.listen(PORT)
}
bootstrap()
