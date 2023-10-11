const profileAvatar = document.getElementById('profile_avatar')
const profileNameContainer = document.getElementById('profile_name-container')
const profileStat = document.getElementById('profile_stat')
const profileDescribe = document.getElementById('profile_describe')
const profilePhotos = document.getElementById('profile_photos')

profileAvatar.innerHTML = `
  <img src="ava.jpeg" alt="">
`

profileNameContainer.innerHTML = `
  <div class="profile_name">janedoe_</div>
`

const editBtn = document.createElement('button')
editBtn.setAttribute('class', 'edit_btn')
editBtn.innerText = 'Edit Profile'
profileNameContainer.appendChild(editBtn)
editBtn.addEventListener('click', () => {
  editBtn.style.border = '2px solid blue'
})

profileStat.innerHTML = `
  <div class="stat"><span>164</span> posts</div>
  <div class="stat"><span>188</span> followers</div>
  <div class="stat"><span>206</span> following</div>
`

profileDescribe.innerHTML = 'Jane Doe Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️';

profilePhotos.innerHTML = `
  <img src="photo1.jpeg" alt="">
  <img src="photo2.jpeg" alt="">
  <img src="photo3.jpeg" alt="">
  <img src="photo4.jpeg" alt="">
  <img src="photo5.jpeg" alt="">
  <img src="photo6.jpeg" alt="">
  <img src="photo7.jpeg" alt="">
  <img src="photo8.jpeg" alt="">
  <img src="photo9.jpeg" alt="">
`