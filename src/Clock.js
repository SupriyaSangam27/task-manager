function Clock() {
    // return Date.now();
    return new Date().toLocaleTimeString();
}

export default Clock