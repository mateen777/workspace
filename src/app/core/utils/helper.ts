function generateUUID4() {
    return (
        (1e7.toString() + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c:any) =>
            (
                c ^
                (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
            ).toString(16),
        )
    );
}

function isValidUUID(uuid: string): boolean {
    //Regex to test
    const uuidRegex = /^[0-9a-zA-Z]{8}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{12}$/;
    return uuidRegex.test(uuid);
}

function formatUrl(
    urlParts: (string | number)[],
    slashPosition: 'start' | 'end' | 'both' | 'none' = 'none'
  ): string {
    // Join the URL parts with slashes
    let url = urlParts.join('/');
  
    // Remove leading slash if it exists
    if (url.startsWith('/')) url = url.slice(1);
  
    // Remove trailing slash if it exists
    if (url.endsWith('/')) url = url.slice(0, -1);
  
    switch (slashPosition) {
        case 'start':
          url = `/${url}`; // Prepend a leading slash
          break;
        case 'end':
          url = `${url}/`; // Append a trailing slash
          break;
        case 'both':
          url = `/${url}/`; // Prepend a leading and append a trailing slash
          break;
        case 'none':
        default: // Do nothing, keep the URL as is
          break;
    }
  
    return url;
}

export { generateUUID4, isValidUUID, formatUrl };
