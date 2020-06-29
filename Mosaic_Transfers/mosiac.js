let nem = require("nem-sdk").default;
let endpoint = nem.model.objects.create("endpoint")(nem.model.nodes.defaultTestnet, nem.model.nodes.defaultPort);

let common = nem.model.objects.create("common")("Password","Private Key");

let transferTransaction = nem.model.objects.create("transferTransaction")("Senders Address", 1, "Message for the sender");

var mosaicDefinitions = nem.model.objects.get("mosaicDefinitionMetaDataPair");

var mosaicAttachment = nem.model.objects.create("mosaicAttachment")("NameSpace", "Token Name", amount of token wanting to send);

transferTransaction.mosaics.push(mosaicAttachment);

nem.com.requests.namespace.mosaicDefinitions(endpoint, mosaicAttachment.mosaicId.namespaceId).then(function(res){
  var definition = nem.utils.helpers.searchMosaicDefinitionArray(res.data, ["Token Name"]);
  var fullName = nem.utils.format.mosaicIdToName(mosaicAttachment.mosaicId);
  mosaicDefinitions[fullName] = {};
  mosaicDefinitions[fullName].mosaicDefinition = definition[fullName];

  var preparedTransaction = nem.model.transactions.prepare("mosaicTransferTransaction")(common, transferTransaction, mosaicDefinitions, nem.model.network.data.testnet.id);
  preparedTransaction.fee = 1000000;

  nem.model.transactions.send(common, preparedTransaction, endpoint).then(function(res){
    console.log(res);
  }, function(err){
    console.log(err);
  });

}, function(err){
  console.log(err);
});
