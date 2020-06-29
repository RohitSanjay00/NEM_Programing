let nem = require('nem-sdk').default;

let endpoint = nem.model.objects.create('endpoint')(
  nem.model.nodes.defaultTestnet,nem.model.nodes.defaultPort
);

let common = nem.model.objects.create('common')(
  'Password','PrivateKey'
);

var transferTransaction = nem.model.objects.create("transferTransaction")(
"Senders Address", Amount of XEM you want to transfer, "Message you want to send along");

let preparedTransaction = nem.model.transactions.prepare('transferTransaction')(
  common, transferTransaction, nem.model.network.data.testnet.id
);



nem.model.transactions.send(common, preparedTransaction, endpoint).then(
  function(res){
    console.log(res);
  }, function(err){
    console.log(err);
  });
