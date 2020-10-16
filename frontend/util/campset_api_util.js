
export const fetchCampsites = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/campsets',
        
    });
}
export const fetchCampsite = (campsiteId) => {
    return $.ajax({
        method: 'GET',
        url: `api/campsets/${campsiteId}`,
    });
}
