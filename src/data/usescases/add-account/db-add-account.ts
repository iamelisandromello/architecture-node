import { AddAccount, AddAccountModel } from '../../../domain/usecases/interfaces/add-account'
import { AccountModel } from '../../../domain/usecases/models/account'
import { Encrypter } from '../../interfaces/encrypter'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly encrypter: Encrypter
  ) {}

  async add (account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)
    return Promise.resolve(null)
  }
}