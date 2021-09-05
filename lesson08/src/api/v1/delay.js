export const delay = () => new Promise((resolve) => {
    setTimeout(() => resolve({
        status: true,
    }), 1000);
});
