export const fetching_posts_data = async(setState: (posts: any) => void) =>{
    const [imagesJson, textsJson] = await fetching_promises()

    const posts = merging_images_and_texts_into_one_json(textsJson, imagesJson)
    
    setState(posts)
  }
  
const fetching_promises = async(): Promise<any> => {
    const posts_text_content = fetch('https://jsonplaceholder.typicode.com/posts/')
    const posts_photo_content = fetch('https://jsonplaceholder.typicode.com/photos/')
    const [images, texts] = await Promise.all([posts_photo_content, posts_text_content])
    
    const [imagesJson, textsJson] = await Promise.all([images.json(), texts.json()])

    return [imagesJson, textsJson]
}

const merging_images_and_texts_into_one_json = (textsJson: any[], imagesJson: any[]) => textsJson
    .map((post: any, index: number) =>({
        ...post, media: {url: imagesJson[index].url, title: imagesJson[index].title}
    })) //Observe it is completly meaningless, since the database has no obligation to 
        //map image and text contents in the same order.