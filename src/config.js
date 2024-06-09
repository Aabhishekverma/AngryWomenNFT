const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Angry women club-";
const description = "Welcome To Angry Women Club --NFT";
const baseUri = "ipfs://Qma4YAPAPfWAks7G4vSQqmzG2jQcP3kaTGtjE9x8F4vHQp";

const solanaMetadata = {
    symbol: "YC",
    seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
    external_url: "https://www.youtube.com/c/hashlipsnft",
    creators: [{
        address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
        share: 100,
    }, ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [{
        growEditionSizeTo: 400,
        layersOrder: [
            { name: "background" },
            { name: "face" },
            { name: "eyes" },
            { name: "eyebrow" },
            { name: "lips" },
            { name: "hair" },
            { name: "cap" },
            { name: "shirttop" },
            { name: "shirtdown" },

        ],
    },
    {
        growEditionSizeTo: 800,
        layersOrder: [
            { name: "background" },
            { name: "face" },
            { name: "eyes" },
            { name: "eyebrow" },
            { name: "lips" },
            { name: "hair" },
            { name: "cap" },
            { name: "3dshirttop" },
            { name: "3dshirtdown" },

        ],
    },
    {
        growEditionSizeTo: 1200,
        layersOrder: [
            { name: "background" },
            { name: "faceRing" },
            { name: "eyes" },
            { name: "eyebrow" },
            { name: "lips" },
            { name: "hair" },
            { name: "cap" },
            { name: "shirttop" },
            { name: "shirtdown" },

        ],
    },
    {
        growEditionSizeTo: 1600,
        layersOrder: [
            { name: "background" },
            { name: "faceRing" },
            { name: "eyes" },
            { name: "eyebrow" },
            { name: "lips" },
            { name: "hair" },
            { name: "cap" },
            { name: "3dshirttop" },
            { name: "3dshirtdown" },

        ],
    },
    {
        growEditionSizeTo: 2000,
        layersOrder: [
            { name: "background" },
            { name: "face" },
            { name: "eyes" },
            { name: "eyebrow" },
            { name: "lips" },
            { name: "hairfull" },
            { name: "shirttop" },
            { name: "shirtdown" },

        ],
    },
    {
        growEditionSizeTo: 2400,
        layersOrder: [
            { name: "background" },
            { name: "face" },
            { name: "eyes" },
            { name: "eyebrow" },
            { name: "lips" },
            { name: "hairfull" },
            { name: "3dshirttop" },
            { name: "3dshirtdown" },

        ],
    },
    {
        growEditionSizeTo: 2800,
        layersOrder: [
            { name: "background" },
            { name: "faceRing" },
            { name: "eyes" },
            { name: "eyebrow" },
            { name: "lips" },
            { name: "hairfull" },
            { name: "shirttop" },
            { name: "shirtdown" },

        ],
    },
    {
        growEditionSizeTo: 3000,
        layersOrder: [
            { name: "background" },
            { name: "faceRing" },
            { name: "eyes" },
            { name: "eyebrow" },
            { name: "lips" },
            { name: "hairfull" },
            { name: "3dshirttop" },
            { name: "3dshirtdown" },

        ],
    },

];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
    width: 1000,
    height: 1000,
    smoothing: false,
};

const gif = {
    export: false,
    repeat: 0,
    quality: 100,
    delay: 500,
};

const text = {
    only: false,
    color: "#ffffff",
    size: 20,
    xGap: 40,
    yGap: 40,
    align: "left",
    baseline: "top",
    weight: "regular",
    family: "Courier",
    spacer: " => ",
};

const pixelFormat = {
    ratio: 2 / 128,
};

const background = {
    generate: true,
    brightness: "80%",
    static: false,
    default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
    thumbPerRow: 5,
    thumbWidth: 50,
    imageRatio: format.height / format.width,
    imageName: "preview.png",
};

const preview_gif = {
    numberOfImages: 5,
    order: "ASC", // ASC, DESC, MIXED
    repeat: 0,
    quality: 100,
    delay: 500,
    imageName: "preview.gif",
};

module.exports = {
    format,
    baseUri,
    description,
    background,
    uniqueDnaTorrance,
    layerConfigurations,
    rarityDelimiter,
    preview,
    shuffleLayerConfigurations,
    debugLogs,
    extraMetadata,
    pixelFormat,
    text,
    namePrefix,
    network,
    solanaMetadata,
    gif,
    preview_gif,
};