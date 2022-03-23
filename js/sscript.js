document.querySelectorAll('.work__btn').forEach(function(tabContent) {
    tabContent.addEventListener('click', function(el) {
     const path = el.currentTarget.dataset.path
     document.querySelectorAll('.tab-content').forEach(function(event) {
         event.classList.remove('tab-content--active')
         document.querySelector(`[data-target=${path}]`).classList.add('tab-content--active')
     })
    })
})