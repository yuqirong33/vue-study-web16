import Vue from 'vue'

function create(Component, props) {
  const vm = new Vue({
    render: h => h(Component, {
      props
    })
  }).$mount()

  document.body.appendChild(vm.$el)

  const comp = vm.$children[0]

  //删除
  comp.remove = function () {
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }
  return comp
}

export default create