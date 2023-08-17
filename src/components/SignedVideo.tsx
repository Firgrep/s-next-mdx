import { generateV4ReadSignedUrl } from "@/server/bucket";

export const SignedVideo = async () => {

    try {
        const videoUrl = await generateV4ReadSignedUrl();

        console.log(videoUrl);
        
        if (typeof videoUrl === "string") {
            return (
                <>  
                    <h1 className="text-2xl p-6">Signed Video</h1>
                    <div>
                        <video controls>
                            <source src={videoUrl} type="video/mp4" />
                        </video>
                    </div>
                </>
            )
        }
    } catch(error) {
        console.error("Error fetching singed URL:", error);
    }
    
    

}