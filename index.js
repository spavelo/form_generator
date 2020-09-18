function createForm(parentElementId, form) {
    let parentElement = document.getElementById(parentElementId)
    parentElement.innerHTML = ''

    for (let item of form.fields) {
        let tag = document.createElement(item.tagName)

        Object.keys(item).forEach(key => {
            if (key !== 'tagName') {
                tag[key] = item[key]
            }
        })

        parentElement.append(tag)
    }

}
