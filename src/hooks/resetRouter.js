const resetRouter = (navigation, page) => {
    navigation.reset({
        index: 0,
        routes: [{ name: page }],
    });
}

export default resetRouter;