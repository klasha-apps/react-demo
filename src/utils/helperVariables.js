export const klashaConfig = {
    isTestMode: 'dev',
    email: 'yowivig426@goonby.com',
    phone_number: '+2348143108254',
    merchantKey: process.env.REACT_APP_MERCHANT_KEY,
    amount: 1000,
    sourceCurrency: '',
    destinationCurrency: '',
    tx_ref: '' + Math.floor((Math.random() * 1000000000) + 1),
    businessId: '1',
    fullname: 'Dansteve Adekanbi',
    paymentDescription: '',
    kit: {
        currency: '',
        phone_number: '+2348143108254',
        email: 'yowivig426@goonby.com',
        fullname: 'Dansteve Adekanbi',
        tx_ref: '' + Math.floor((Math.random() * 1000000000) + 1),
        paymentType: '',
    }
}
