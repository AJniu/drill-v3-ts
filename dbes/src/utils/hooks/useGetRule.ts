import { FormInstance, FormRules } from 'element-plus'

type Trigger = 'blur' | 'change'

// 获取必填校验
export const getRequireRule = (
    message: string = '请输入',
    required: boolean = true,
    trigger: Trigger = 'blur'
) => {
    return [{ required, message, trigger }]
}

// 表单校验
export const formValidate = (formRef: FormInstance) => {
    const res = formRef.validate((validate) => {
        return validate
    })
    return res
}

// 获取 rules 对象
// export function getRulesObj<T extends Object>(ruleObj: Object): any {
//     return reactive<FormRules<T>>({
//         ...ruleObj
//     })
// }
