const StoreCustomers = artifacts.require('StoreCustomers');

contract('StoreCustomers', function (accounts) {
    beforeEach(async () => {
        contract = await StoreCustomers.new();
    })

    it('Get Message', async () => {
        const message = await contract.message();
        console.log(message);
        assert(message === 'Tiao Macale na area!!!!', 'macale nao brotou!!');
    })


    it('Set Message', async () => {
        await contract.setMessage('Macalezin');

        const message = await contract.message();
        console.log(message);
        assert(message === 'Macalezin', 'macale nao brotou!!');
    })
})