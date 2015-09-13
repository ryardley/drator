module.exports = {
  dehydrate: function(key, data, context){
    context = context || 'window';
    return context + '.' + key + ' = ' + JSON.stringify(data);
  },
  hydrate: function(key, context){
    context = context || window;
    if(typeof context === 'undefined' || context === null){
      return;
    }

    if(context[key] === undefined){
      throw new Error("It looks like the key '" + key + "' has not been hydrated.")
    }

    var dehydrated = context[key];
    delete context[key];
    return dehydrated;
  }
}
