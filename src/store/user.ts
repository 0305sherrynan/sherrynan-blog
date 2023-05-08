import { defineStore, StoreDefinition } from 'pinia'
import {StorageHandler,StorageType} from '@/libs/storage'

//需要永久存储的用户信息
interface userStorage {
    email:string
    coverimg:string
    nickname:string
}

export const useUserStore = defineStore('user', {
    state: () => ({
        userInfo:<userStorage>{}
    }),
    getters:{

    },
    actions: {
        /**
         * updateAllUserInfo 更新所有的userInfo
         */
        updateAllUserInfo(){

        }
    },
  })