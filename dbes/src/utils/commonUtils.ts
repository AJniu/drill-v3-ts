// 判断是否为 null 或 undefined
export const isNullOrUndefined = (val :any) :boolean =>  {
    const res = val === null || val === undefined
    return res
}

// 精准获取数据类型
export const getValType = (val :any) :string => {
    return Object.prototype.toString.call(val).slice(8, -1))
}

