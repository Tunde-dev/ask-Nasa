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