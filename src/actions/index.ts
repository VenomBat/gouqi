import { createAction, Action } from 'redux-actions'
import {
  IToastPayload,
  IUserInfo,
  styleType
} from '../interfaces'

export type IuserLogin = (userInfo: IUserInfo) => Action<IUserInfo>
export const userLogin: IuserLogin = createAction('user/login')

export const syncPlaylists = createAction('playlists/sync')

export type ItoastAction = (kind: styleType, text: string) => Action<IToastPayload>

export const toastAction: ItoastAction = createAction('ui/toast',
  (kind: styleType, text: string) => ({ kind, text})
)

export type ISearchQuery = (query: string) => Action<{ query: string}>

export const startSearch: ISearchQuery = createAction('search/query', (query: string) => ({ query }))

export const searchPlaylists = createAction('search/playlist')

export const searchSongs = createAction('search/song')

export const searchAlbums = createAction('search/album')

export const searchArtists = createAction('search/artist')

export type ISearchActiveTab = (activeTab: number) => Action<number>
export const changeSearchActiveTab: ISearchActiveTab = createAction('search/activeTab',
  (activeTab: number) => activeTab
)