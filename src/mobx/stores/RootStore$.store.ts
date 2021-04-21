import { notification } from 'antd'
import axios from 'axios'
import { flow } from 'mobx'
import { applySnapshot, types } from 'mobx-state-tree'
import { contentMock, newsMockData } from '../../mock/contentNews'
import { makeSnapshotIn } from '../helpers/functions'
import { IContentModel, ISnapshotContentModelIn, ISnapshotNewsModelIn } from '../interfaces'
import { AddContent } from '../models/AddContentModel.model'
import { ContentModel } from '../models/ContentModel.model'
import { NewsModel } from '../models/NewsModel.model'
import { v4 as uuid } from 'uuid'

export const RootStore$ = types.model('RootStore$', {
    content$: types.array(ContentModel),
    news$: types.array(NewsModel),
    addContent$: types.maybe(AddContent),
    default_add_type: 'news'
})
    .actions((self) => ({
        fetchImagesFromAPICats: flow(function* () {
            try {
                const res = yield  axios.get('https://api.thecatapi.com/v1/images/search/', {
                    headers: {
                        'x-api-key': '10eb1b55-1806-4da6-b9f8-806b2df13b95'
                    },
                    params: {
                        size: 'full',
                        limit: 8
                    }
                })
                const beautifyData = makeSnapshotIn(res.data)

                applySnapshot(self.content$, beautifyData)

                notification.success({ message: 'Data was updated' })
            } catch (e) {
                notification.error({ message: e.message })
            }
        })

    }))
    .actions((self) => ({
        setUpdateContent(content: ISnapshotContentModelIn[]) {
            applySnapshot(self.content$, content)
        },

        setUpdateType(content: boolean) {
            if (content) {
                self.default_add_type = 'news'
            } else {
                self.default_add_type = 'content'
            }
        },

        setUpdateNews(content: ISnapshotNewsModelIn[]) {
            applySnapshot(self.news$, content)
        },

        setInitialState() {
            self.fetchImagesFromAPICats()
            applySnapshot(self.content$, contentMock)
            applySnapshot(self.news$, newsMockData)
        },

        setAddContentInitial() {
            const emptyData = {
                title: '',
                description: '',
                img: ''
            }

            // @ts-ignore
            self.addContent$ = emptyData

            // applySnapshot(self.addContent$, emptyData)

        },

        addContent(data: IContentModel) {

            const newData = {
                ...data,
                id: uuid(),
            }

            if (self.default_add_type === 'news') {
                self.news$.push(newData)
            } else {
                self.content$.push(newData)
            }

            // @ts-ignore
            self.addContent$ = {}
        }


    }))

    .views((self) => ({
        get contentSum() {
            return self.content$.length
        },

        get defaultAddType() {
            return self.default_add_type === 'news' ? true : false
        }
    }))