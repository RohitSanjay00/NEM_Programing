let nem = require('nem-sdk').default;

let endpoint = nem.model.objects.create('endpoint')(
  nem.model.nodes.defaultTestnet,nem.model.nodes.defaultPort
);

let common = nem.model.objects.create('common')(
  'SolarGridX','d14f9fe9d02b2e61a2a80ae443191ac9473cf6514cb44d7527075dca2e30a906'
);

var transferTransaction = nem.model.objects.create("transferTransaction")(
"TC4O7TF3KPCYXKPOYB6VHLMOJJFRFWI5PWLPETAH", 10, "Hello");

let preparedTransaction = nem.model.transactions.prepare('transferTransaction')(
  common, transferTransaction, nem.model.network.data.testnet.id
);



nem.model.transactions.send(common, preparedTransaction, endpoint).then(
  function(res){
    console.log(res);
  }, function(err){
    console.log(err);
  });
