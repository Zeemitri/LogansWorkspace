document.addEventListener("DOMContentLoaded", () => {
  const allTabButtons = document.querySelectorAll(".tab-btn")
  const allTabContents = document.querySelectorAll(".tab-content")

  allTabButtons.forEach((clickedButton) => {
    clickedButton.addEventListener("click", () => {
      const tabNum = clickedButton.dataset.forTab
      const selectedTab = document.querySelector(
        `.tab-content[data-tab="${tabNum}"]`,
      )

      allTabButtons.forEach((e) => e.classList.remove("active"))
      allTabContents.forEach((e) => e.classList.remove("active"))

      clickedButton.classList.add("active")
      selectedTab.classList.add("active")
    })
  })
})
