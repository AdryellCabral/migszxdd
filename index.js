async function loadLatestVideo() {
    try {
        // O caminho é relativo à raiz do seu site no GitHub Pages
        const response = await fetch('latest_video.json');
        const data = await response.json();

        // Exemplo de como usar os dados
        // console.log(data);
        // console.log("URL da Thumbnail:", data.thumbnail);
        
        // Colocando na página
        // document.getElementById('video-title').textContent = data.title;
        document.getElementById('video-link').href = data.url;
        document.getElementById('video-thumbnail').src = data.thumbnail;

    } catch (error) {
        console.error("Erro ao carregar o JSON do vídeo:", error);
    }

}

loadLatestVideo();