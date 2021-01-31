import { Request, Response, NextFunction } from 'express'

export const cors = (req: Request, res: Response, next: NextFunction): void => {
  res.set('access-conttrol-allow-origin', '*')
  res.set('access-conttrol-allow-methods', '*')
  res.set('access-conttrol-allow-headers', '*')
  next()
}
