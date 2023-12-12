module.exports = {
  root: true,
  env: {
    browser: true, // browser global variables
    // adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12.
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    'prettier/prettier': 'error',
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test/**', // tape, common npm pattern
          'tests/**', // also common npm pattern
          'spec/**', // mocha, rspec-like pattern
          '**/__tests__/**', // jest pattern
          '**/__mocks__/**', // jest pattern
          'test.{js,jsx}', // repos with a single test file
          'test-*.{js,jsx}', // repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
          '**/jest.config.js', // jest config
          '**/webpack.config.js', // webpack config
          '**/webpack.config.*.js', // webpack config
          '**/rollup.config.js', // rollup config
          '**/rollup.config.*.js', // rollup config
          '**/gulpfile.js', // gulp config
          '**/gulpfile.*.js', // gulp config
          '**/Gruntfile{,.js}', // grunt config
          '**/protractor.conf.js', // protractor config
          '**/protractor.conf.*.js', // protractor config
          '**vite**',
          '**@vitejs**'
        ],
        optionalDependencies: false
      }
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'accumulator', // for reduce accumulators
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'context', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          '$scope', // for Angular 1 scopes
          'staticContext', // for ReactRouter context
          'state' // for vuex state
        ]
      }
    ],
    'import/extensions': [
      'off',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never'
      }
    ],
    // =========================================
    // 当存在更简单的替代方案时，不允许使用三元运算符 / disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': 'error',

    // 新版本eslint要求文件名使用驼峰命名，index会报错
    'vue/multi-word-component-names': 'off',

    // vue文件必须有name
    'vue/no-reserved-component-names': 'off',

    // 箭头体样式
    'arrow-body-style': 'error',

    // 导入不解析
    'import/no-unresolved': 'off',

    // 禁止一元操作符
    'no-plusplus': 'off',

    // 不允许按位运算
    'no-bitwise': 'off',

    // 不允许 ==
    eqeqeq: 'off',

    // 无参数重新分配
    'no-dupe-keys': 'off',
    'no-param-reassign': ['off'],

    // 变量不能有下划线
    'no-underscore-dangle': 'off',

    // 依赖性不能在 dev中
    'import/no-extraneous-dependencies': 'off',

    // 函数不能在定义之前使用
    'no-use-before-define': 'off',

    // 驼峰
    camelcase: 'off',

    'no-unused-expressions': 'off',

    'global-require': 0,

    'vue/no-mutating-props': 'off', // 允许修改props

    'import/no-dynamic-require': 'off',

    'no-shadow': 'off',

    // 唯一导出使用 export default
    'import/prefer-default-export': 'off',

    // 箭头函数必须要return
    'consistent-return': 'off',

    // 枚举校验
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    // 嵌套三元
    'no-nested-ternary': 'off',

    // 无限制语法
    'no-restricted-syntax': 'off',

    // for in
    'guard-for-in': 'off',

    // for continue
    'no-continue': 'off',

    // 使用正则表达式文字而不是“RegExp”构造函数。
    'prefer-regex-literals': 'off',

    // 默认参数放最后
    'default-param-last': 'off',

    // 'vue/html-self-closing': 'error'
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],

    'no-console': 'off'
    // 'vue/attributes-order': 'off'
  }
}
