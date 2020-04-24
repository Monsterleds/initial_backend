import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Transaction from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<string> {
    const transactionsRepository = getCustomRepository(Transaction);

    try {
      const transactionExists = await transactionsRepository.findOne({
        where: { id },
      });

      if (!transactionExists) {
        throw new AppError('User does not exists.');
      }
    } catch {
      throw new AppError('User does not exists.');
    }

    await transactionsRepository.delete(id);

    return id;
  }
}

export default DeleteTransactionService;
