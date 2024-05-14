const flatArray = [{
	id: 0,
	house: "2",
	floor: "1",
	rooms: "3",
	square: "95.3 м.кв.",
	price: "880$",
	priceTotal: "83 864$",
	flatNumber: 1,
	status: "booking",
},
	{
		id: 1,
		house: "2",
		floor: "1",
		rooms: "2",
		square: "51,7 м.кв.",
		price: "880$",
		priceTotal: "45 496$",
		flatNumber: 2,
		status: "sold",
	},
	{
		id: 2,
		house: "2",
		floor: "1",
		rooms: "2",
		square: "51,7 м.кв.",
		price: "880$",
		priceTotal: "45 496$",
		flatNumber: 3,
		status: "free",
	},
	{
		id: 3,
		house: "2",
		floor: "1",
		rooms: "3",
		square: "92,4 м.кв.",
		price: "780$",
		priceTotal: "72 072$",
		flatNumber: 4,
		status: "action",
	},
	{
		id: 4,
		house: "2",
		floor: "1",
		rooms: "3",
		square: "92.7 м.кв.",
		price: "780$",
		priceTotal: "72 306$",
		flatNumber: 5,
		status: "action",
	},
	{
		id: 5,
		house: "2",
		floor: "1",
		rooms: "1",
		square: "31.9 м.кв.",
		price: "750$",
		priceTotal: "23 925$",
		flatNumber: 6,
		status: "booking",
	},
	{
		id: 6,
		house: "2",
		floor: "1",
		rooms: "1",
		square: "38.5 м.кв.",
		price: "760$",
		priceTotal: "29 260$",
		flatNumber: 7,
		status: "sold",
	},
	{
		id: 7,
		house: "2",
		floor: "1",
		rooms: "1",
		square: "35.2 м.кв.",
		price: "760$",
		priceTotal: "26 752$",
		flatNumber: 8,
		status: "free",
	},
	{
		id: 8,
		house: "2",
		floor: "1",
		rooms: "3",
		square: "89.3 м.кв.",
		price: "840$",
		priceTotal: "75 012$",
		flatNumber: 9,
		status: "booking",
	},
]

window.addEventListener('load', ()=> {
		const installFloor = () => {
			const flats = document.querySelectorAll('.flat')
			const flatInfo = document.querySelector('.floor-info')

			const removeActiveClass = ()=> {
				flats.forEach(active => {
					active.classList.remove('active')
				})
			}

			const initialValue = [{
				id: 8,
				house: "2",
				floor: "1",
				rooms: "3",
				square: "79.3 м.кв.",
				price: "880$",
				priceTotal: "55510$",
				flatNumber: 9,
				status: "action",
			}]

			const cat = {
				color: 'white',
				age: 3,
			}

			console.log(cat.color)

			const renderInfo =(array)=> {
				const flatInformation = array.map(item =>{
					return (`
                    <div class="info-item">
                        <div class="info-item__title">Номер дома:</div>
                        <div>${item.house}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">Этаж:</div>
                        <div>${item.floor}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">Количество комнат:</div>
                        <div>${item.rooms}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">Площадь квартиры:</div>
                        <div>${item.square}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">Цена за м²:</div>
                        <div>${item.price}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">Цена за квартиру:</div>
                        <div>${item.priceTotal}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">Номер квартиры:</div>
                        <div>${item.flatNumber}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">Статус квартиры:</div>
                        <div>${item.status}</div>
                    </div>
                `)
				}).join('')
				flatInfo.innerHTML = flatInformation
			}

			renderInfo(initialValue)




			flats.forEach(flat => {
				if (flat.classList.contains('booking')) {
					flat.querySelector('.status-cell__text-span').innerHTML = "Бронь"
				} else if (flat.classList.contains('action')) {
					flat.querySelector('.status-cell__text-span').innerHTML = "Акция"
				} else if (flat.classList.contains('sold')) {
					flat.querySelector('.status-cell__text-span').innerHTML = "Продано"
				} else {
					flat.querySelector('.status-cell__text-span').innerHTML = "Свободно"
				}


				flat.addEventListener('click', () => {
					removeActiveClass()
					flat.classList.add('active')

					let thisFlat = flat.getAttribute('data-number')

					let flatNumber = flatArray.filter(item=> item.flatNumber === Number(thisFlat))

					console.log(initialValue, flatNumber)

					renderInfo(flatNumber)
				})
			})
		}

		document.querySelector('.floor-plan') ? installFloor() : null
	}
)
