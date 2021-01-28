import { HttpRequest, HttpResponse } from '../interfaces/http'
import { MissinParmError } from '../errors/missing-param-error'
import { InvalidParmError } from '../errors/invalid-param-error'
import { badRequest } from '../helpers/http-helper'
import { Controller } from '../interfaces/controller'
import { EmailValidator } from '../interfaces/email-valitador'

export class SignUpController implements Controller {
  constructor (
    private readonly emailValidator: EmailValidator
  ) {}

  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissinParmError(field))
      }
    }
    const isValid = this.emailValidator.isValid(httpRequest.body.email)
    if (!isValid) {
      return badRequest(new InvalidParmError('email'))
    }
  }
}
