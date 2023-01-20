
const result = document.getElementById('result')




setTimeout(getDataFromSite, 2500);

// function getData(){
//     header.innerHTML = `<img
//     src="https://plus.unsplash.com/premium_photo-1661573207795-97d5b966f281?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
//     alt="laptop"
//     />`

//     title.innerHTML = `Lorem ipsum dolor sit amet.`

//     excerpt.innerHTML =`Lorem ipsum dolor sit amet consectetur adipisicing elit.`

//     profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/40.jpg" alt="John-Doe" />`

//     Profilename.innerHTML=`John-Doe`

//     date.innerHTML = `oct 08, 2023`

//     animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
//     animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
// }

const listItems = []


async function getDataFromSite(){
    try {
        
        const res = await fetch('https://randomuser.me/api?results=50')
        const {results} = await res.json()
        console.log(results)
        //Clear results
        result.innerHTML=''
        results.forEach(user => {
            const li = document.createElement('li')
            listItems.push(li)
            li.innerHTML = `
            <div class="card">
					<div class="card-header animated-bg" class="header"> <img
                    src="${user.picture.large}"
                    alt="${user.name.first}"
                    /> </div>
					<div class="card-content">
						<h3 class="card-title animated-bg animated-bg-text" class="title"> Lorem ipsum dolor sit amet.</h3>
						<p class="card-excerpt" class="excerpt">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
						<div class="author">
                            <div class="profile-img animated-bg" class="profile-img"> 
                            <img src="${user.picture.large}"
                            alt="${user.name.first}" />
                            </div>
							<div class="author-info">
								<strong class="animated-bg animated-bg-text" class="name"> ${user.name.first} ${user.name.last} </strong>
								<small class="animated-bg animated-bg-text" class="date"> ${user.registered.date}</small>
							</div>
						</div>
					</div>
				</div>    


            `
            result.appendChild(li)
            const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')
            animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
        });

    } catch (error) {
        console.log("error")
    }
}



