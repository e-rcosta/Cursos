const locators = {
    LOGIN: {
        USER: '[data-test=email]',
        PASSORD: '[data-test=passwd]',
        BTN_LOGIN: '.btn'
    },
    MENU: {
        HOME: '[data-test=menu-home]',
        SETTINGS: '[data-test=menu-settings]',
        RESETAR: '[href="/reset"]',
        CONTAS: '[href="/contas"]',
        MOVIMENTACAO: '[data-test=menu-movimentacao]',
        EXTRATO: '[data-test=menu-extrato]'
    },
    CONTAS: {
        NOME: '[data-test=nome]',
        BTN_SALVAR: '.btn',
        FN_XP_BTN_EDITAR: nome => `//table//td[contains(., '${nome}')]/..//i[@class='far fa-edit']`
    },
    MOVIMENTACAO: {
        DESCRICAO: '[data-test=descricao]',
        VALOR: '[data-test=valor]',
        INTERESSADO: '[data-test=envolvido]',
        CONTA: '[data-test=conta]',
        STATUS: '[data-test=status]',
        BTN_SALVAR: '.btn-primary'       
    },
    EXTRATO: {
        LINHAS: '.list-group > li',
        FN_XP_BUSCA_ELEMENTO: (desc, valor) => `//span[contains(., '${desc}')]/following-sibling::small[contains(.,'${valor}')]`,
        FN_XP_REMOVER_ELEMENTO: desc => `//span[contains(., '${desc}')]/../../..//i[@class='far fa-trash-alt']`,
        FN_XP_ALTERAR_ELEMENTO: conta => `//span[contains(., '${conta}')]/../../..//i[@class='fas fa-edit']`
    },
    SALDO: {
        FN_XP_SALDO_CONTA: (nome) => `//td[contains(., '${nome}')]/../td[2]`
    },
    MESSAG: '.toast-message' 

}

export default locators