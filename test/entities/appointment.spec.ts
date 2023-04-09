import { test, expect } from 'vitest';
import { Appointment } from './appointment';

test('crate an appointment', () => {
    const appointment = new Appointment({
        id: 1,
        nome: 'Wellinne Nascimento',
        cpf: '123.456.789-',
        email: 'wwna@cin.ufpe.br',
        telefone: '(99) 99999-9999',
        senha: '123456',
        confirmarSenha: '123456',
        endereco: 'Rua 1',
        complemento: 'Casa 1',
        pontoRef: 'Perto da padaria'
    });

    expect(appointment.cpf).toHaveLength(14);
});


test('crate an appointment', () => {
    const appointment = new Appointment({
        id: 1,
        nome: 'Wellinne Nascimento',
        cpf: '123.456.789-10',
        email: 'wwna@cin.ufpe.br',
        telefone: '(99) 99999-9999',
        senha: '123456',
        confirmarSenha: '123456',
        endereco: 'Rua 1',
        complemento: 'Casa 1',
        pontoRef: 'Perto da padaria'
    });

    expect(appointment.cpf).toHaveLength(14);
});


test('crate an appointment', () => {
    const appointment = new Appointment({
        id: 1,
        nome: '',
        cpf: '',
        email: '',
        telefone: '',
        senha: '',
        confirmarSenha: '',
        endereco: '',
        complemento: '',
        pontoRef: ''
    });

    expect(appointment).toBeDefined();
    expect(appointment.cpf).toHaveLength(14);
});


test('crate an appointment', () => {
    const appointment = new Appointment({
        id: 1,
        nome: 'Wellinne Nascimento',
        cpf: '123.456.789-10',
        email: 'wwna@cin.ufpe.br',
        telefone: '(99) 99999-9999',
        senha: '123456',
        confirmarSenha: '123456',
        endereco: 'Rua 1',
        complemento: 'Casa 1',
        pontoRef: 'Perto da padaria'
    });

    expect(appointment).toBeDefined();
    expect(appointment.cpf).toHaveLength(14);
});
