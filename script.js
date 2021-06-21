const audios = document.querySelectorAll("audio")
const audiosList = []

audios.forEach((audio)=>{
 return audiosList.push(audio.id)
})

audiosList.forEach((audio)=>{
  const btn = document.createElement("button")
  btn.classList.add("btn")
  btn.innerText = audio
  
  btn.addEventListener("click" ,() =>{
    stopAudio()
    document.querySelector(`#${audio}`).play()
  })
  return document.querySelector("#buttons").appendChild(btn)
})

function stopAudio(){
  audiosList.forEach((audio)=>{
  let sound= document.getElementById(audio)
  sound.pause()
  return sound.currentTime = 0
  })
}

