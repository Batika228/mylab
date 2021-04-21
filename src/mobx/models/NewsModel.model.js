  
import { getParentOfType, types } from 'mobx-state-tree'
import { RootStore$ } from "../stores/RootStore$.store";

export const NewsModel = types.model('NewsModel', {
    id: types.identifier,
    title: '',
    img: '',
    description: ''
})
    .actions((self) => ({
        removeData(id) {
            const { news$, setUpdateNews } = getParentOfType(self, RootStore$)
            const updatedData = news$.filter((item) => item.id !== id)

            setUpdateNews(updatedData)
        }
    }))