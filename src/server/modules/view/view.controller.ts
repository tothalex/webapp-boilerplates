import { Controller, Get, Res, Req } from '@nestjs/common'
import { Request, Response } from 'express'

import { ViewService } from '~modules/view/view.service'

@Controller('*')
export class ViewController {
  constructor(private viewService: ViewService) {}

  @Get()
  all(@Req() req: Request, @Res() res: Response) {
    const handle = this.viewService.getViewServer().getRequestHandler()
    handle(req, res)
  }
}
