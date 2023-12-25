import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// Element-plus 按需自动导入方案
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        // Element-plus 按需自动导入
        AutoImport({
            include: [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                /\.vue$/,
                /\.vue\?vue/, // .vue
                /\.md$/ // .md
            ],
            imports: ['vue', 'vue-router'],
            dts: 'src/auto-import.d.ts',
            resolvers: [
                ElementPlusResolver(),
                // Auto import icon components
                // 自动导入图标组件
                IconsResolver({
                    prefix: 'Icon'
                })
            ],
            eslintrc: {
                enabled: true
            }
        }),
        Components({
            resolvers: [
                // Auto register icon components
                // 自动注册图标组件
                // <!-- 自动导入必须遵循名称格式 {prefix：默认为i}-{collection：图标集合的名称}-{icon：图标名称}  -->
                IconsResolver({
                    enabledCollections: ['ep']
                }),
                // Auto register Element Plus components
                // 自动导入 Element Plus 组件
                ElementPlusResolver()
            ],
            dts: 'src/components.d.ts'
        }),

        Icons({
            autoInstall: true
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
        // 配置文件扩展名
        extensions: ['.js', '.ts', '.vue']
    },
    //   组件按块分组
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    // 格式：组名: [对应组件]
                    //   'learn-ts': ['./src/views/learn-ts/BaseType.vue', './src/views/learn-ts/NumberView.vue']
                }
            }
        }
    }
})
