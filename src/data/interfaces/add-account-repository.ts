import { AddAccountModel } from '../../domain/usecases/interfaces/add-account'
import { AccountModel } from '../../domain/usecases/models/account'

export interface AddAccountRepository {
  add: (accountData: AddAccountModel) => Promise<AccountModel>
}
