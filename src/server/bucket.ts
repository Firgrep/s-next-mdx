/**
 * TODO(developer): Uncomment the following lines before running the sample.
 * Note: when creating a signed URL, unless running in a GCP environment,
 * a service account must be used for authorization.
 */
// The ID of your GCS bucket
const bucketName = 'sphil-test-assets-bucket';

// The full path of your file inside the GCS bucket, e.g. 'yourFile.jpg' or 'folder1/folder2/yourFile.jpg'
const fileName = 'FNChat.mp4';

// Imports the Google Cloud client library
import { GetSignedUrlConfig, Storage } from '@google-cloud/storage';

// Creates a client
const storage = new Storage();

export async function generateV4ReadSignedUrl() {

    try {
        // These options will allow temporary read access to the file
        const options: GetSignedUrlConfig = {
            version: 'v4',
            action: "read",
            expires: Date.now() + 15 * 60 * 1000, // 15 minutes
        };

        // Get a v4 signed URL for reading the file
        const [url] = await storage
            .bucket(bucketName)
            .file(fileName)
            .getSignedUrl(options);

        return url;

    } catch (error) {
        console.log(error)
    }
    
}
