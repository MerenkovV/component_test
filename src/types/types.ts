export type ObjType = {
    label: string,
    image?: string
}

type sizeType = 'small' | 'medium' | 'large'
type colorType = 'dark' | 'light' | 'color'

export type Props = {
    size?: sizeType,
    color?: colorType,
    objArray: Array<ObjType>,
    callback?: (info:ObjType[]|[])=>void
}