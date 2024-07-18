export const generateDocId = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    const charsLength = chars.length;
    let docId = "";

    for (let i=0; i<20; i++) {
        const index = Math.floor(Math.random() * charsLength);
        docId += chars[index];
    }
    return docId;
}