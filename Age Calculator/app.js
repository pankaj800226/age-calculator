const dateInput = document.querySelector('input')
const years = document.querySelector('p')
const months = document.querySelector('span')
const day1 = document.querySelector('h4')


dateInput.addEventListener('change', () => {
    const birthDate = new Date(dateInput.value)
    const currentDate = new Date();
    const newDate = new Date(currentDate - birthDate)
    console.log(newDate);


    const year = newDate.getFullYear() - 1970;
    const month = newDate.getMonth();
    const day = newDate.getDate();

    years.innerHTML = `<p>Year</p> ${year}`
    months.innerHTML = `<p>Month</p> ${month}`
    day1.innerHTML = `<p>Day</p>${day}`

})

