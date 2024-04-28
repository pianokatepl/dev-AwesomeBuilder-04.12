const planItem = document.querySelectorAll('.item-path')
const cellAddress = document.querySelector('#address')
const cellFloors = document.querySelector('#floors')
const cellFreeFlat = document.querySelector('#freeFlat')
const cellSoldFlat = document.querySelector('#soldFlat')
const cellActionFlat = document.querySelector('#actionFlat')

const showInformation = (cell, dataAttr) => planItem.forEach(path => {
	path.addEventListener('mouseover', () => {
		cell.innerText = path.getAttribute(dataAttr)
	})

	const buildFreeFlat = path.getAttribute('data-free-flat')

	buildFreeFlat === "0" ? path.classList.add('sold') : null

	if (path.classList.contains('sold')) {
		const pathLink = path.closest('.item-link')
		pathLink.addEventListener('click', (event) =>{
			event.preventDefault()
		})
	}
})

showInformation(cellAddress, 'data-address')
showInformation(cellFloors, 'data-floors')
showInformation(cellFreeFlat, 'data-free-flat')

if(document.querySelector('.build-item-page')) {
	showInformation(cellSoldFlat, 'data-sold-flat')
	showInformation(cellActionFlat, 'data-action-flat')
}


// planItem.forEach(path => {
//     path.addEventListener('mouseover', () => {
//         const thisAddress = path.getAttribute('data-address')
//         const thisFloors = path.getAttribute('data-floors')
//         const thisFreeFlat = path.getAttribute('data-free-flat')
//         const thisSoldFlat = path.getAttribute('data-sold-flat')

//         cellAddress.innerText = thisAddress
//         cellFloors.innerText = thisFloors
//         cellFreeFlat.innerText = thisFreeFlat
//         cellSoldFlat.innerText = thisSoldFlat
//     })

//     const buildFreeFlat = path.getAttribute('data-free-flat')

//     buildFreeFlat === "0" ? path.classList.add('sold') : null

//     if (path.classList.contains('sold')) {
//         const pathLink = path.closest('.item-link')
//         pathLink.addEventListener('click', (event) =>{
//             event.preventDefault()
//         })
//     }
// })
