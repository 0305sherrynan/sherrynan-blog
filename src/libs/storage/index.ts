export enum StorageType{
    Local = 'local',
    Session = 'session'
}
export class StorageHandler{
    public  setItem(type:StorageType,key:string,value:string|Object){
        if (type == StorageType.Local){
            localStorage.setItem(key,JSON.stringify(value))
        }else{ sessionStorage.setItem(key,JSON.stringify(value))}
    }
    public  getItem (type: StorageType, key: string) :string|null {
        if (type === StorageType.Local) {
          if (localStorage.getItem(key)) {
            return localStorage.getItem(key)
          }
          return null
        } else {
          if (sessionStorage.getItem(key)) {
            return sessionStorage.getItem(key)
          }
          return null
        }
    }
      // 移除Storage
    public  remove (type: StorageType, key: string) {
    if (type === StorageType.Local) {
      if (localStorage.getItem(key)) localStorage.removeItem(key)
    } else {
      if (sessionStorage.getItem(key)) sessionStorage.removeItem(key)
    }
    }
    // 清空Storage
    public  clear (type: StorageType) {
    if (type === StorageType.Local) {
      localStorage.clear()
    } else {
      sessionStorage.clear()
    }
  }
}