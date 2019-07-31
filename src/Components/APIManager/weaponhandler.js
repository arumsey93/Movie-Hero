import ApiHandler from "./apihandler"

export default Object.create(ApiHandler, {
    get: {
       value: function (id) {
          return  ApiHandler.get("weapons", id)
        }
    },
  getAll: {
      value: function (){
          return ApiHandler.all("weapons")
      }
  },
  delete: {
      value: function(id){
          return ApiHandler.delete("weapons", id)
      }
  },
  post: {
      value: function(newData){
          return ApiHandler.post("weapons",newData)
      }
  },
  put: {
      value: function(editData){
      return ApiHandler.put("weapons",editData)
      }
  }

  })