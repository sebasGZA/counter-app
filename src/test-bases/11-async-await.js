export const getImage = async () => {
  try {
    const api_key = "DDWcKxUNI9wO5kI96cxxgVwywOZIiSwD";
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
