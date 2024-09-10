import commonAPI from './commonAPI'
import serverUrl from './baseURL'

// upload video

export const uploadVideoAPI= async(uploadVideo)=>{

    return await commonAPI("POST",`${serverUrl}/allVideos`,uploadVideo)

}

export const getAllVideoAPI = async () =>{
    return await commonAPI("GET",`${serverUrl}/allVideos`,"")
}