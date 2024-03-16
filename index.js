window.onload = async(event)=>{
    window.manifest = await request("site.webmanifest");
}
