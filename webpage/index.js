let dummy = "https://trialreceptor.inesctec.pt/galaxy-wrappers/irp-integration/data.tsv"

function getUrl() {
    return document.getElementById("url").value
}

async function postToGalaxy(url) {
    let searchParams = new URLSearchParams(window.location.search)
    let galaxyUrl = searchParams.get("GALAXY_URL");
    let toolId = searchParams.get("tool_id");

    const formData  = new FormData();
    formData.append("tool_id", toolId);
    formData.append("URL", url);

    const response = await fetch(galaxyUrl, {
        method: 'POST',
        body: formData
    });

    if (response.status == 200) {
        window.location.href = response.url.substring(0, response.url.indexOf("tool_runner"));
    }
}