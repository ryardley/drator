module.exports = {
  dehydrate: function(key, data, context){
    return "window." + key + " = " + JSON.stringify(data);
  },
  hydrate: function(key, context){

    if(typeof window === 'undefined'){
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
