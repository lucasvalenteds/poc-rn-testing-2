import { Customers, CustomerApiClient } from './api';
import { Customer, ExistingCustomer } from './types';

export const mockCustomer: Customer = {
  name: 'John Smith',
  age: 35,
};

export const mockExistingCustomer: ExistingCustomer = {
  ...mockCustomer,
  id: 'fb80e922-ce1c-11ea-be2b-0f3b177252ed',
};

export const mockCustomers: Customers = {
  customers: [mockExistingCustomer],
};

export const mockCustomerApiClient: CustomerApiClient = {
  create: jest.fn(),
  findAll: jest.fn(),
  remove: jest.fn(),
};

export const mockCustomerApiClientCreate = jest
  .fn()
  .mockResolvedValue(mockExistingCustomer);

export const mockCustomerApiClientCreateError = jest
  .fn()
  .mockRejectedValue(Error('create'));

export const mockCustomerApiClientFindAll = jest
  .fn()
  .mockResolvedValue([mockExistingCustomer]);

export const mockCustomerApiClientFindAllError = jest
  .fn()
  .mockRejectedValue(Error('findAll'));

export const mockCustomerApiClientFindAllOnSecondCall = jest
  .fn()
  .mockResolvedValueOnce([])
  .mockResolvedValueOnce([mockExistingCustomer]);

export const mockCustomerApiClientRemove = jest.fn().mockResolvedValue({});

export const mockCustomerApiClientRemoveError = jest
  .fn()
  .mockRejectedValue(Error('remove'));
