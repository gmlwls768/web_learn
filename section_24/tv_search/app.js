const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function(e){
    e.preventDefault();
    try { // It run first time 
        const div = document.querySelector('div')
        div.remove()
    }
    catch (e){
        console.log(e)
    }
    const searchTerm = form.elements.query.value;
    const config = {params: {q: searchTerm}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    makeImages(res.data)
    form.elements.query.value = "";
})

const makeImages = (shows) =>{
    const container = document.createElement("div");
    for(let result of shows){
        // if(result.show.image){
        // const img = document.createElement("IMG");
        // img.src = result.show.image.medium;
        // document.body.append(img)
        // }
        try{
            const img = document.createElement("IMG");
            img.src = result.show.image.medium;
            container.appendChild(img)
        }
        catch {}
    }
    document.body.append(container);
}

const deleteImages = () =>{
    const container = document.querySelector('div');
    container.remove()
}
