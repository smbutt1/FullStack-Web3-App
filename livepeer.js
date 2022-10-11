import { createReactClient } from "@livepeer/react";
import { studioProvider } from "livepeer/providers/studio";
import saveToIPFS from "../../utils/saveToIPFS";
import { useCreateAsset } from "@livepeer/react";

const {
  mutate: createAsset,
  data: asset,
  uploadProgress,
  status,
  error,
} = useCreateAsset();
// When a user clicks on the upload button
const handleSubmit = async () => {
  // Calling the upload video function
  await uploadVideo();
  // Calling the upload thumbnail function and getting the CID
  const thumbnailCID = await uploadThumbnail();
  // Creating a object to store the metadata
  let data = {
    video: asset?.id,
    title,
    description,
    location,
    category,
    thumbnail: thumbnailCID,
    UploadedDate: Date.now(),
  };
  // Calling the saveVideo function and passing the metadata object
  await saveVideo(data);
};

// Function to upload the video to IPFS
const uploadThumbnail = async () => {
  // Passing the file to the saveToIPFS function and getting the CID
  const cid = await saveToIPFS(thumbnail);
  // Returning the CID
  return cid;
};

// Function to upload the video to Livepeer
const uploadVideo = async () => {
  // Calling the createAsset function from the useCreateAsset hook to upload the video
  createAsset({
    name: title,
    file: video,
  });
};

// Function to save the video to the Contract
const saveVideo = async (data) => {
  // Get the contract from the getContract function
  let contract = await getContract();

  // Upload the video to the contract
  await contract.uploadVideo(
    data.video,
    data.title,
    data.description,
    data.location,
    data.category,
    data.thumbnail,
    false,
    data.UploadedDate
  );
};


const LivePeerClient = createReactClient({
  provider: studioProvider({ apiKey: "6967c611-3fc7-43d7-b34b-927e3a1ed79a" }),
});

export default LivePeerClient;
