export const ping = () => ({ type: 'PING'});

export const searchInput = input => {
   console.log('searchInput action: ', input);
    return {
       type: 'SEARCH_INPUT',
        payload: 'something goes here'
    }
};