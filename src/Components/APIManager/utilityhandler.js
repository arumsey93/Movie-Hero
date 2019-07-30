import ApiHandler from "./apihandler"

export default Object.create(ApiHandler, {
    get: {
       value: function (id) {
          return  ApiHandler.get("utility", id)
        }
    },
  getAll: {
      value: function (){
          return ApiHandler.all("utility")
      }
  },
  delete: {
      value: function(id){
          return ApiHandler.delete("utility", id)
      }
  },
  post: {
      value: function(newData){
          return ApiHandler.post("utility",newData)
      }
  },
  put: {
      value: function(editData){
      return ApiHandler.put("utility",editData)
      }
  }

  })