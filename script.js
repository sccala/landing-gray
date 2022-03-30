// @ts-nocheck
// const tabList = document.querySelector('[role="tablist"]')
// const tabs = tabList.querySelectorAll('[role="tab"]')
// tabs.forEach(tab => {
//   tab.addEventListener('click', changeTabPanel)
// })

// const navClick = $(function () {
//   $('.mobile-nav-toggle li').on('click', function () {
//     $('[role="tab"]').addClass('.active')
//     console.log(`$('.active') is now active`)
//   })
// })

// function changeTabPanel(e) {
//   const targetTab = e.target
//   const targetPanel = targetTab.getAttribute('aria-controls')

//   const tabContainer = targetTab.parentNode
//   const mainContainer = tabContainer.parentNode

//   tabContainer.querySelector('[aria-selected="true"]').setAttribute('aria-selected', false)
//   targetTab.setAttribute('aria-selected', true)

//   hideContent(mainContainer, '[role="tabpanel"]')
//   showContent(mainContainer, [`#${targetPanel}`])
//   console.log('this works')
// }

// function hideContent(parent, content) {
//   parent.querySelectorAll(content).forEach(item => item.setAttribute('hidden', true))
// }

// function showContent(parent, content) {
//   parent.querySelector(content).removeAttribute('hidden')
// }
// $(function () {
//   $('.mobile-nav-toggle').on('click', function () {
//     $('aria-expanded').attr('aria-expanded', 'true')
//   })
// })

$(document).ready(function () {
  $('#home-btn').on('click', function () {
    toggleActiveTab(this)
    $('#home-tab').removeAttr('hidden')
    $('#contact-tab').attr('hidden', true)
    $('#products-tab').attr('hidden', true)
     $('#contact-tab').attr('hidden', true)
    // loadDestination(destinations[0])
    console.log('home-btn clicked')
  })

  $('#contact-btn').on('click', function () {
    toggleActiveTab(this)
   $('#home-tab').attr('hidden', true)
   $('#contact-tab').removeAttr('hidden')
   $('#products-tab').attr('hidden', true)
   $('#faq-tab').attr('hidden', true)
    // loadDestination(destinations[1])
    console.log('contact-btn clicked')
  })

  $('#products-btn').on('click', function () {
    toggleActiveTab(this)
     $('#home-tab').attr('hidden', true)
     $('#contact-tab').attr('hidden', true)
     $('#products-tab').removeAttr('hidden')
     $('#faq-tab').attr('hidden', true)
    // loadDestination(destinations[2])
    console.log('products-btn clicked')
  })

  $('#faq-btn').on('click', function () {
    toggleActiveTab(this)
     $('#home-tab').attr('hidden', true)
     $('#contact-tab').attr('hidden', true)
     $('#products-tab').attr('hidden', true)
     $('#faq-tab').removeAttr('hidden')
    // loadDestination(destinations[3])
    console.log('faq-btn clicked')
  })
})

function toggleActiveTab() {
  //de-selects all tabs
  $('.primary-navigation').attr('aria-selected', false)
  //makes the selected tab active
  $('[aria-selected="false"]').attr('aria-selected', true).addClass('.active')
}