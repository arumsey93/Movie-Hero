import ApiHandler from "./apihandler"

export default Object.create(ApiHandler, {
    get: {
       value: function (id) {
          return  ApiHandler.get("defense", id)
        }
    },
  getAll: {
      value: function (){
          return ApiHandler.all("defense")
      }
  },
  delete: {
      value: function(id){
          return ApiHandler.delete("defense", id)
      }
  },
  post: {
      value: function(newData){
          return ApiHandler.post("defense",newData)
      }
  },
  put: {
      value: function(editData){
      return ApiHandler.put("defense",editData)
      }
  }

  })