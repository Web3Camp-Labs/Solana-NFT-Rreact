import { PinataSDK } from "pinata-web3";

const pinata = new PinataSDK({
    pinataJwt: import.meta.env.VITE_PINATA,
    pinataGateway: import.meta.env.VITE_PINATA_URL,
});

export class NftStorageUploader  {

    async upload(file, options) {

        const upload = await pinata.upload.file(file);

        const {IpfsHash} = upload;
        return [`https://gateway.pinata.cloud/ipfs/${IpfsHash}`];
    };

    async uploadJson(json, options){


        const upload = await pinata.upload.json(json)
        const {IpfsHash} = upload;
        return [`https://gateway.pinata.cloud/ipfs/${IpfsHash}`];
    };

    getUploadPrice (files, options) {
        console.log("getUploadPrice",files,options);
    };
}

export const nftStorageUploader = (options) => ({
    install(umi) {
        umi.uploader = new NftStorageUploader();
    },
});
