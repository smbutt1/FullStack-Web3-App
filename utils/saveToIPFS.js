// importing axios
import axios from "axios";
import saveToIPFS from "../../utils/saveToIPFS";
import { useCreateAsset } from "@livepeer/react";



const saveToIPFS = async (file) => {
  // create a new multipart form data
  const formData = new FormData();
  // add file to the form data
  formData.append("file", file);

  var config = {
    method: "post",
    url: "https://api.web3.storage/upload",
    headers: {
      Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEZFOEMzNTVhNTkzNzhFZmJlOUYyRDQ0ZDZiOTM3ODRCQkNGNDVDRGIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjU0NTQxMDY0MjAsIm5hbWUiOiJZb3V0dWJlLXRva2VuIn0.Pkq0c_fVIx44sTbcCM2VWz14fm0GwRWqrDNM6sTWoSU`,
      "Content-Type": "text/plain",
    },
    data: formData,
  };

  // Posting the form data to the IPFS API
  const response = await axios(config);
  // returning the CID
  return response.data.cid;
};

export default saveToIPFS;
