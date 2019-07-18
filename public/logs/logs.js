async function getData(){
    const response = await fetch('/api');
    const data = await response.json();

    data.forEach(element => {
        const root = document.createElement('p');
        const location = document.createElement('p');
        const date = document.createElement('p');
        const image = document.createElement('img');

        location.textContent = `Latitude: ${element.lat}  Longitudue: ${element.long}`;
        date.textContent = `Date: ${new Date(element.timeStamp).toLocaleString()}`;
        image.src = element.image64;
        image.alt = "Selfie of People";
        root.append(location, date, image);
        document.body.append(root);
    });

    console.log(data);
}

getData();