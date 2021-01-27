import { HttpRequest, HttpResponse } from '../interfaces/http'
import { MissinParmError } from '../errors/missing-param-error'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return {
          statusCode: 400,
          body: new MissinParmError(field)
        }
      }
    }
  }
}
