
/*
 * hookio/db/actions
 * For working with actions in the db
 */

var hookIO = require('../../hookio').hookIO,
  Action = require('../models/action').Action,
  store = hookIO.db.db.get_store('actions', {
    protocol: String,
    type: String,
    key: String,
    config: Object,
    lastUpdated: Number
  });


exports.getActions = function(idArray, callback) {
  var condition = [];
  idArray.forEach(function(id) {
    condition.push({
      _id: id
    });
  });

  store.find(condition, function(results) {
    if (0 >= results.length) {
      callback([])
      return;
    }

    var ret = [];

    results.forEach(function(result) {
      ret.push(new Action({
        id: result._id,
        type: result.type,
        config: result.config
      }));
    });

    callback(ret);
  });
};

exports.checkAction = function(protocol, key, callback) {
  store.find({
    protocol: protocol,
    key: key
  }, function(results) {
    if (0 >= results.length) {
      callback(null);
      return;
    }

    callback(results[0]._id);
  });
};

exports.storeAction = function(action, key, callback) {
  action = action.toObject();
  var data = {
    protocol: action.protocol,
    type: action.type,
    key: key,
    config: action.config,
    lastUpdated: new Date().getTime()
  };

  store.save(data, callback);
};
