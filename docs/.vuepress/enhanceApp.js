export default ({ Vue }) =>
  Vue.mixin({
    data: function() {
      return {
        esper_tenant: "foo"
      };
    },
    computed: {
      esper_tenant_name() {
        return this.esper_tenant;
      }
    },
    mounted() {
      if (document) {
        const esper_tenant_temp =
          document &&
          document.cookie &&
          document.cookie.replace(
            /(?:(?:^|.*;\s*)esper_tenant_name\s*\=\s*([^;]*).*$)|^.*$/,
            "$1"
          );
        this.esper_tenant =
          esper_tenant_temp === "" ? "foo" : esper_tenant_temp;
      }
    }
  });
