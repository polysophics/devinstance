import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'c3097da99d5b4301b752131e473ecc27'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '4d0476e0fa1e4158a08d2f83d3bd1d84'
                    }
                }
            }
        }
    }
}
