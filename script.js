const tabList = document.querySelector('[role="tablist"]')
const tabs = tabList.querySelectorAll('[role="tab"]')
tabs.forEach(tab => {
  tab.addEventListener('click', changeTabPanel)
})

const navClick = $(function () {
  $('.mobile-nav-toggle li').on('click', function () {
    $('[role="tab"]').addClass('.active')
    console.log(`$('.active') is now active`)
  })
})

function changeTabPanel(e) {
  const targetTab = e.target
  const targetPanel = targetTab.getAttribute('aria-controls')

  const tabContainer = targetTab.parentNode
  const mainContainer = tabContainer.parentNode

  tabContainer.querySelector('[aria-selected="true"]').setAttribute('aria-selected', false)

  targetTab.setAttribute('aria-selected', true)

  hideContent(mainContainer, '[role="tabpanel"]')
  showContent(mainContainer, [`#${targetPanel}`])
}

function hideContent(parent, content) {
  parent.querySelectorAll(content).forEach(item => item.setAttribute('hidden', true))
}

function showContent(parent, content) {
  parent.querySelector(content).removeAttribute('hidden')
}
