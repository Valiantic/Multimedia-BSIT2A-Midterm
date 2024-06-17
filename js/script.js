
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
        imageUrl: "./images/profiles/railey.jpg",
        Heading: "Railey Canete",
        bgColor: "rgb(255, 246, 209)",
        para: "One bad chapter doesn't mean the story is over. Every book has its challenges, but the best ones keep turning the page. Stay positive, and keep moving forward."
    },
    {
        id: 4,
        imageUrl: "./images/profiles/meinard.jpg",
        Heading: "Meinard Languita",
        bgColor: "rgb(255, 246, 209)",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus fugiat perspiciatis voluptatibus eligendi, deserunt corrupti atque ipsa, ipsam magnam iste consequuntur laborum consequatur harum blanditiis, porro quae quidem laboriosam inventore?"
    },
    {
        id: 5,
        imageUrl: "./images/profiles/jommel.jpg",
        Heading: "Jommel Labrador",
        bgColor: "rgb(255, 246, 209)",
        para: "Everywhere you go, take a picture of what catches your eye.  Capture the world through your own unique lens. What appeals to you is more important than what others think. "
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
        imageUrl: "./images/profiles/lans.jpg",
        Heading: "Lance Michele Gunda",
        bgColor: "rgb(255, 246, 209)",
        para: "Kung bibitaw ng mahinahon ako ba'y lulubayan ng ating mga kahapon na 'di na kayang ayusin ng lambing. -Arthur Nery"
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
        if (data.id === 3) {
            profileUrl = `./html/railey.html?id=${data.id}`; // Replace with your actual URL structure for the other HTML page
        }
        if (data.id === 4) {
            profileUrl = `./html/meinard.html?id=${data.id}`; // Replace with your actual URL structure for the other HTML page
        }
        if (data.id === 5) {
            profileUrl = `./html/jommel.html?id=${data.id}`; // Replace with your actual URL structure for the other HTML page
        }
        if (data.id === 6) {
            profileUrl = `./html/rhenz.html?id=${data.id}`; // Replace with your actual URL structure for the other HTML page
        }
        if (data.id === 7) {
            profileUrl = `./html/lans.html?id=${data.id}`; // Replace with your actual URL structure for the other HTML page
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