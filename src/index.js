const input = document.querySelector('input');
const btn = document.getElementById("playButton");

document.body.addEventListener("input", () => {
  if (input.value) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
});

btn.addEventListener('click', async () => {
  const request = document.querySelector('input').value;
  const requestData = {
    text: request
  };

  try {
    const response = await fetch("https://japanesespeaker.onrender.com/textConverter", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    });

    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);

    const audioElement = document.createElement('audio');
    audioElement.src = audioUrl;
    audioElement.autoplay = true;
    document.body.appendChild(audioElement);

  } catch (error) {
    throw new Error(error);
  }
});
