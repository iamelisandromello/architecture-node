import { EmailValidator } from '../presentation/interfaces/email-valitador'

export class EmailValidatorAdapter implements EmailValidator {
  isValid (email: string): boolean {
    return false
  }
}
