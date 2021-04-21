import { IRequestData, ISnapshotContentModelIn } from '../interfaces'

export function makeSnapshotIn(res: IRequestData[]): ISnapshotContentModelIn[] {

    return res.map((data) => {
        return {
            id: data.id,
            title: '',
            description: '',
            img: data.url
        }
    })

}