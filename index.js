module.exports = {
  dehydrate: function(key, data, context){
    context = context || 'window';
    return context + '.' + key + ' = ' + JSON.stringify(data);
  },
  hydrate: function(key, context){

    window = window || context;

    if(typeof window === 'undefined' || window === null){
      return;
    }

    if(window[key] === undefined){
      throw new Error("It looks like the key '" + key + "' has not been hydrated.")
    }

    var dehydrated = window[key];
    delete window[key];
    return dehydrated;
  }
}
