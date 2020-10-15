
export const fetchSpots = () => {
    return $.ajax({
        url: 'api/spots',
        method: 'POST'
    });
}
export const fetchSpot = (spotId) => {
    return $.ajax({
        url: `api/spots/${spotId}`,
        method: 'POST'
    });
}
