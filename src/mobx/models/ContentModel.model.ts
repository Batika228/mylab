import { types, getParentOfType, getParent } from 'mobx-state-tree'
import { IContentModel, ISnapshotContentModelIn } from '../interfaces'
import { RootStore$ } from '../stores/RootStore$.store'

export const ContentModel = types.model('ContentModel', {
    id: types.identifier,
    title: types.optional(types.string, ''),
    description: '',
    img: ''
})
    .actions((self) => ({
        removeCard(id: string): void {
            const { content$, setUpdateContent } = getParentOfType(self, RootStore$)
            const newContent: ISnapshotContentModelIn[] = content$.filter((item) => item.id !== id)
            setUpdateContent(newContent)
        }
    }))