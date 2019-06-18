export default ({ Vue }) => {
    Vue.mixin({
      computed: {
        esper_tenant_name() {
          const esper_tenant_name = document.cookie.replace(/(?:(?:^|.*;\s*)esper_tenant_name\s*\=\s*([^;]*).*$)|^.*$/, "$1")
          return esper_tenant_name === '' ? 'foo' : esper_tenant_name
        },
      }
    })
  }