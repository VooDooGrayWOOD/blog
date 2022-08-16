function generateUserData() {
    return {

        image: `https://avatars.dicebear.com/api/pixel-art/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
    }
}

module.exports = {
    generateUserData
}