module.exports = {
  hydrate: function(key, data, context){
    return "window." + key + " = " + JSON.stringify(data);
  },
  dehydrate: function(key, context){
    context = context || window;
    if(typeof context === 'undefined'){
      throw new Error("The 'context' object does not exist.")
    }

    if(context[key] === undefined){
      throw new Error("The key " + key + " does not exist on the given context.")
    }

    var dehydrated = context[key];
    delete context[key];
    return dehydrated;
  }
}
