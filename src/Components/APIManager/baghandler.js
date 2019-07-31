import ApiHandler from "./apihandler"

export default Object.create(ApiHandler, {
    get: {
       value: function (id) {
          return  ApiHandler.get("bag", id)
        }
    },
  getAll: {
      value: function (){
          return ApiHandler.all("bag")
      }
  },
  delete: {
      value: function(id){
          return ApiHandler.delete("bag", id)
      }
  },
  post: {
      value: function(newData){
          return ApiHandler.post("bag", newData)
      }
  },
  put: {
      value: function(editData){
      return ApiHandler.put("bag",editData)
      }
  }

  })