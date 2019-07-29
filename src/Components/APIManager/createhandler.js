import ApiHandler from "./apihandler"

export default Object.create(ApiHandler, {
    get: {
       value: function (id) {
          return  ApiHandler.get("heroes", id)
        }
    },
  getAll: {
      value: function (){
          return ApiHandler.all("heroes")
      }
  },
  delete: {
      value: function(id){
          return ApiHandler.delete("heroes", id)
      }
  },
  post: {
      value: function(newData){
          return ApiHandler.post("heroes", newData)
      }
  },
  put: {
      value: function(editData){
      return ApiHandler.put("heroes",editData)
      }
  }

  })