const breedsListResponse = {
    message: [
        { id: "abys", name: "Abyssinian" },
        { id: "beng", name: "Bengal" },
        { id: "siam", name: "Siamese" },
        { id: "pers", name: "Persian" },
        // Add more cat breeds as needed
    ],
};

const catImagesResponse = {
    message: [
        { id: "abys", url: "https://cdn2.thecatapi.com/images/abys.jpg" },
        { id: "beng", url: "https://cdn2.thecatapi.com/images/beng.jpg" },
        { id: "siam", url: "https://cdn2.thecatapi.com/images/siam.jpg" },
        { id: "pers", url: "https://cdn2.thecatapi.com/images/pers.jpg" },
        // Add more cat images as needed
    ],
};

export default async function mockFetch(url) {
    switch (url) {
        case "https://api.thecatapi.com/v1/breeds": {
            return {
                ok: true,
                status: 200,
                json: async () => breedsListResponse,
            };
        }
        case "https://api.thecatapi.com/v1/images/search?breed_id=abys":
        case "https://api.thecatapi.com/v1/images/search?breed_id=beng":
        case "https://api.thecatapi.com/v1/images/search?breed_id=siam":
        case "https://api.thecatapi.com/v1/images/search?breed_id=pers": {
            return {
                ok: true,
                status: 200,
                json: async () => catImagesResponse.message.filter(img => img.id === url.split('=').pop())[0] ? [{ url: catImagesResponse.message.filter(img => img.id === url.split('=').pop())[0].url }] : [],
            };
        }
        default: {
            throw new Error(`Unhandled request: ${url}`);
        }
    }
}
