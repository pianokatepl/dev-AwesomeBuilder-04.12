const flatArray = [{
	id: 0,
	house: "2",
	floor: "1",
	rooms: "3",
	square: "95.3 Рј.РєРІ.",
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
		square: "51,7 Рј.РєРІ.",
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
		square: "51,7 Рј.РєРІ.",
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
		square: "92,4 Рј.РєРІ.",
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
		square: "92.7 Рј.РєРІ.",
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
		square: "31.9 Рј.РєРІ.",
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
		square: "38.5 Рј.РєРІ.",
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
		square: "35.2 Рј.РєРІ.",
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
		square: "89.3 Рј.РєРІ.",
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
				square: "79.3 Рј.РєРІ.",
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
                        <div class="info-item__title">РќРѕРјРµСЂ Р±СѓРґРёРЅРєСѓ :</div>
                        <div>${item.house}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">РџРѕРІРµСЂС…:</div>
                        <div>${item.floor}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">РљС–Р»-С‚СЊ РєС–РјРЅР°С‚:</div>
                        <div>${item.rooms}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">РџР»РѕС‰Р° РєРІР°СЂС‚РёСЂРё:</div>
                        <div>${item.square}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">Р¦С–РЅР° Р·Р° РјВІ:</div>
                        <div>${item.price}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">Р¦С–РЅР° Р·Р° РєРІР°СЂС‚РёСЂСѓ:</div>
                        <div>${item.priceTotal}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">РќРѕРјРµСЂ РєРІР°СЂС‚РёСЂРё:</div>
                        <div>${item.flatNumber}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">РЎС‚Р°С‚СѓСЃ РєРІР°СЂС‚РёСЂРё:</div>
                        <div>${item.status}</div>
                    </div>
                `)
				}).join('')
				flatInfo.innerHTML = flatInformation
			}

			renderInfo(initialValue)




			flats.forEach(flat => {
				if (flat.classList.contains('booking')) {
					flat.querySelector('.status-cell__text-span').innerHTML = "Р‘СЂРѕРЅСЊ"
				} else if (flat.classList.contains('action')) {
					flat.querySelector('.status-cell__text-span').innerHTML = "РђРєС†С–СЏ"
				} else if (flat.classList.contains('sold')) {
					flat.querySelector('.status-cell__text-span').innerHTML = "РџСЂРѕРґР°РЅРѕ"
				} else {
					flat.querySelector('.status-cell__text-span').innerHTML = "Р’С–Р»СЊРЅР°"
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
