import { MercadoPagoConfig, Preference } from 'mercadopago';

// 1. Sua Configuração (Atenção: Use seu Access Token de TESTE ou PRODUÇÃO aqui)
const client = new MercadoPagoConfig({ 
    accessToken: 'TEST-6501852476753082-011111-c8e47acc71250c3e3380116d027ba345-668403821'
});

// 2. Função que cria o link
async function criarLinkDePagamento() {
    const preference = new Preference(client);

    try {
        const response = await preference.create({
            body: {
                items: [
                    {
                        id: 'roteiro-delta-01',
                        title: 'Roteiro Delegado Federal - 12 Semanas',
                        quantity: 1,
                        unit_price: 97.00, // Preço R$ 97,00
                        currency_id: 'BRL'
                    }
                ],
                // Para onde o usuário volta depois de pagar
                back_urls: {
                    success: 'https://google.com', // Depois troque pelo seu site
                    failure: 'https://google.com',
                    pending: 'https://google.com'
                },
                auto_return: 'approved'
            }
        });

        // 3. AQUI ESTÁ O SEGREDO: Mostrar o link no terminal
        console.log('---------------------------------------------------');
        console.log('SEU LINK DE PAGAMENTO É:');
        console.log(response.init_point); 
        console.log('---------------------------------------------------');

    } catch (error) {
        console.log('Deu erro:', error);
    }
}

// Executar a função agora
criarLinkDePagamento();


