Feature('login');

const {I, login_page} = inject()

BeforeSuite ( () =>{
    console.log('Antes de executar a suite de testes')
})

Before ( () =>{
    console.log('Antes de cada cenário de testes')
})

AfterSuite ( () =>{
    console.log('Ao final de executar a suite de testes')
})

After ( () =>{
    console.log('Ao final de cada cenário de testes')
})

Scenario('Login with success', ({home_page}) => {

    login_page.doLogin('teste@teste.com', '123456');

    home_page.checkLoginSucesss()
});

Scenario('Login with erro', () => {

    login_page.doLogin('teste1@teste.com', '123456')
    
    login_page.checkLoginError()
});