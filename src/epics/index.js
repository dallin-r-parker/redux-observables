export const pingEpic = action$ => {
   return action$.ofType('PING')
       .delay(1000)
       .map(payload => {
           console.log('epic payload: ', payload);
          return {type: 'PONG'}
       });



   // console.log('action: ', action);
   // action.delay(1000);
   // const theMap = action.mapTo({type: 'PONG'});
   //  console.log('theMap: ', theMap);
   //  return theMap
        // .delay(1000)
        // .mapTo({type: 'PONG'});
};
// THE EPIC IS USED AFTER IT'S BEEN THROUGH THE REDUCER!