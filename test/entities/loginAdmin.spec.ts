import { test, expect } from 'vitest';
import { LoginAdmin } from './loginAdmin';


test('crate an loginAdmin', () => {
  const loginAdmin = new LoginAdmin({
      email: 'victorpdf7@gmail.com',
      senha: 'admin123',
  });

});

test('crate an loginAdmin', () => {
  const loginAdmin = new LoginAdmin({
      email: 'admin@gmail.com',
      senha: 'senha123',
  });

});

test('crate an loginAdmin', () => {
  const loginAdmin = new LoginAdmin({
      email: 'admin@gmail.com',
      senha: 'admin123',
  });

});

test('crate an loginAdmin', () => {
  const loginAdmin = new LoginAdmin({
      email: 'admin@gmail.com',
      senha: '',
  });

});

test('crate an loginAdmin', () => {
  const loginAdmin = new LoginAdmin({
      email: '',
      senha: 'admin123',
  });

});