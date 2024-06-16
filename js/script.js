
// Color1: 'rgb(205, 255, 223)'
// Color2: 'rgb(255, 246, 209)'
// Color3: 'rgb(206, 191, 255)'
// Color4: 'rgb(255, 209, 191)'
// Color5: 'rgb(192, 253, 255)'
// Color6: 'rgb(255, 188, 193)'


const arrayData = [
    {
        id: 1,
        imageUrl: "./images/profiles/tristan.jpg",
        Heading: "Tristan Mark Infante",
        bgColor: "rgb(255, 246, 209)",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus fugiat perspiciatis voluptatibus eligendi, deserunt corrupti atque ipsa, ipsam magnam iste consequuntur laborum consequatur harum blanditiis, porro quae quidem laboriosam inventore?"
    },
    {
        id: 2,
        imageUrl: "./images/profiles/steve.jpg",
        Heading: "Steven Gabriel Madali",
        bgColor: "rgb(255, 246, 209)",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus fugiat perspiciatis voluptatibus eligendi, deserunt corrupti atque ipsa, ipsam magnam iste consequuntur laborum consequatur harum blanditiis, porro quae quidem laboriosam inventore?"
    },
    {
        id: 3,
        imageUrl: "./images/a3.jpg",
        Heading: "Railey Canete",
        bgColor: "rgb(255, 246, 209)",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus fugiat perspiciatis voluptatibus eligendi, deserunt corrupti atque ipsa, ipsam magnam iste consequuntur laborum consequatur harum blanditiis, porro quae quidem laboriosam inventore?"
    },
    {
        id: 4,
        imageUrl: "./images/a4.jpg",
        Heading: "Meinard Languita",
        bgColor: "rgb(255, 246, 209)",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus fugiat perspiciatis voluptatibus eligendi, deserunt corrupti atque ipsa, ipsam magnam iste consequuntur laborum consequatur harum blanditiis, porro quae quidem laboriosam inventore?"
    },
    {
        id: 5,
        imageUrl: "./images/a5.jpg",
        Heading: "Jommel Labrador",
        bgColor: "rgb(255, 246, 209)",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus fugiat perspiciatis voluptatibus eligendi, deserunt corrupti atque ipsa, ipsam magnam iste consequuntur laborum consequatur harum blanditiis, porro quae quidem laboriosam inventore?"
    },
    {
        id: 6,
        imageUrl: "./images/a6.jpg",
        Heading: "Rhenzomar Facundo",
        bgColor: "rgb(255, 246, 209)",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus fugiat perspiciatis voluptatibus eligendi, deserunt corrupti atque ipsa, ipsam magnam iste consequuntur laborum consequatur harum blanditiis, porro quae quidem laboriosam inventore?"
    },
    {
        id: 7,
        imageUrl: "./images/.jpg",
        Heading: "Lance Michele Gunda",
        bgColor: "rgb(255, 246, 209)",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus fugiat perspiciatis voluptatibus eligendi, deserunt corrupti atque ipsa, ipsam magnam iste consequuntur laborum consequatur harum blanditiis, porro quae quidem laboriosam inventore?"
    },
    
]


const cardContainer = document.querySelector('.container')

const functionCards = () => {
    arrayData.map((data) => {
        // console.log(data)
        cardContainer.innerHTML += `
        <div class="card" style="background-color: ${data.bgColor}">
            <div class="image">
                <img src="${data.imageUrl}" alt="">
            </div>
            <h2>${data.Heading}</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus fugiat perspiciatis voluptatibus eligendi, deserunt corrupti atque ipsa, ipsam magnam iste consequuntur laborum consequatur harum blanditiis, porro quae quidem laboriosam inventore?</p>

            <a href="https://www.youtube.com/watch?v=2vYtbUabbsQ"><button>My Daily Life</button></a>
           
        </div>`
    })
}

functionCards()