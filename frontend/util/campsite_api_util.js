
export const fetchCampsites = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/campsites',
        
    });
}
export const fetchCampsite = (campsiteId) => {
    return $.ajax({
        method: 'GET',
        url: `api/campsites/${campsiteId}`,
    });
}
