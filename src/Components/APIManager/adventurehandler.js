import ApiHandler from "./apihandler"

export default Object.create(ApiHandler, {
    get: {
       value: function (id) {
          return  ApiHandler.get("adventures", id)
        }
    },
  getAll: {
      value: function (){
          return ApiHandler.all("adventures")
      }
  },
  delete: {
      value: function(id){
          return ApiHandler.delete("adventures", id)
      }
  },
  post: {
      value: function(newData){
          return ApiHandler.post("adventures", newData)
      }
  },
  put: {
      value: function(editData){
      return ApiHandler.put("adventures",editData)
      }
  }

  })