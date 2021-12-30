function editElement(ref, match, replace) {
    // TODO
    while(ref.innerHTML.indexOf(match) !== -1) {
        ref.innerHTML = ref.innerHTML.replace(match, replace);
    }
}