let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

// pause slide when hover slider
document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)

// enable slide when mouse leave out slider
document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)

// slider controll
document.querySelector('.slide-next').addEventListener('click', () =>{
    prevSlide()
    showSlide()
})
document.querySelector('.slide-prev').addEventListener('click', () =>{
    prevSlide()
    showSlide()
})
showSlide()

// setInterval(() =>{
//     if (!slide_play) return
//     nextSlide()
//     showSlide()
// }, 3000);

//render products

let products = [
    {
        name: 'TISSOT T099.407.11.048.00',
        image1: './img/product2.jpg',
        image2: './img/product22.jpg',
        old_price: '18.000.000đ',
        curr_price: '17.200.000đ'
    },
    {
        name: 'Ống kính Fujifilm XF 10-24mm f/4 R OIS',
        image1: './img/product3.jpg',
        image2: './img/product31.jpg',
        old_price: '20.900.000đ',
        curr_price: '15.490.000đ'
    },
    {
        name: 'Flycam DJI Mini 2 Fly More Combo',
        image1: './img/product4.jpg',
        image2: './img/product44.jpg',
        old_price: '14.000.000đ',
        curr_price: '13.900.000đ'
    },
    {
        name: 'Sony Tai nghe không dây WH-CH510',
        image1: './img/product5.jpg',
        image2: './img/product55.jpg',
        old_price: '1.300.000',
        curr_price: '1.190.000đ'
    },
    {
        name: 'Máy quay phim Sony FX3',
        image1: './img/product6.jpg',
        image2: './img/product66.jpg',
        old_price: '93.500.000đ',
        curr_price: '92.990.000đ'
    },
    {
        name: 'Ống kính Sigma 24-70mm f/2.8 DG DN Art (for Sony E)',
        image1: './img/product7.jpg',
        image2: './img/product77.jpg',
        old_price: '25.000.000đ',
        curr_price: '24.990.000đ'
    },
    {
        name: 'Tủ chống ẩm ANDBON AB-21C | 20L',
        image1: './img/product8.jpg',
        image2: './img/product88.jpg',
        old_price: '1.300.000đ',
        curr_price: '1.150.000đ'
    },
]

let product_list = document.querySelector('#latest-products')
// let best_product_list = document.querySelector('#best-products')

products.forEach(e => {
    let prod = `
        <div class="col-3 col-md-6 col-sm-12">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <button class="btn-flat btn-hover btn-shop-now">shop now</button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        ${e.name}
                    </div>
                    <div class="product-card-price">
                        <span><del>${e.old_price}</del></span>
                        <span class="curr-price">${e.curr_price}</span>
                    </div>
                </div>
            </div>
        </div>
    `

    product_list.insertAdjacentHTML("beforeend", prod)
    // best_product_list.insertAdjacentHTML("afterbegin", prod)
})

