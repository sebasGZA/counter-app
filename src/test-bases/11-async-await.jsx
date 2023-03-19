const api_key = "DDWcKxUNI9wO5kI96cxxgVwywOZIiSwD";

// const getImagePromise = () =>
//   new Promise((resolve) =>
//     resolve(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`)
//   );

const getImage = async () => {
  try {
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    return url;
  } catch (err) {
    return err;
  }
};

getImage()
  .then((url) => {
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  })
  .catch(console.err);
