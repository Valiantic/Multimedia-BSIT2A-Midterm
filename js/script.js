
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
        para: "Like a leaf in the wallow breeze, I have no clue where am I heading, but I know it will be a worthwhile one when I arrive at my destination"
    },
    {
        id: 2,
        imageUrl: "./images/profiles/steve.jpg",
        Heading: "Steven Gabriel Madali",
        bgColor: "rgb(255, 246, 209)",
        para: "Light chases me, and stories unfold before my lens. Explore the world through my daily image gallery, where a new perspective comes into view every single day."
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
        imageUrl: "./images/profiles/rhenz.jpg",
        Heading: "Rhenzomar Facundo",
        bgColor: "rgb(255, 246, 209)",
        para: "Just like a kid wondering around, eyes wide with wonder and eager to explore. The world is a playground, and everyday is a chance to uncover something magical."
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
        // const linkUrl = `./html/tristan.html?id=${data.id}`;
        let profileUrl = `./profile.html?id=${data.id}`; // Default profile URL

        // Check if the current data object has a specific target id (replace 2 with your desired target id)
        if (data.id === 1) {
            profileUrl = `./html/tristan.html?id=${data.id}`; // Replace with your actual URL structure for the other HTML page
          }
        if (data.id === 2) {
          profileUrl = `./html/steve.html?id=${data.id}`; // Replace with your actual URL structure for the other HTML page
        }

        cardContainer.innerHTML += `
        <div class="card" style="background-color: ${data.bgColor}">
            <div class="image">
                <img src="${data.imageUrl}" alt="">
            </div>
            <h2>${data.Heading}</h2>
            <p>${data.para}</p>

            <a href="${profileUrl}"><button>My Daily Life</button></a>
           
        </div>`
    })
}

functionCards()