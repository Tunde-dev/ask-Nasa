export async function getData(url="", data={}) {
    const response = await fetch(url, data)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        });
    return response.json();
};

export const getYouTubeVideoId = (url) => {
    let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = url.match(regExp);
    return (match && match[7].length === 11)? match[7] : false;
}